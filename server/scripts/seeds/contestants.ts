import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { db } from '../../db';
import { femaleContestants, maleContestants } from '../../db/schema';
import { Resource } from 'sst';
import { promises as fs } from 'fs';
import { map } from 'radash';
import { contestants } from '../../constants/contestants';

export const handler = async () => {
	const retrievedMaleContestants = await db.query.maleContestants.findMany();
	const retrievedFemaleContestants = await db.query.femaleContestants.findMany();

	if (retrievedMaleContestants.length || retrievedFemaleContestants.length) {
		return {
			statusCode: 400,
			body: 'Contestants already seeded'
		};
	}

	const contestantsAfterHeadShotsUploaded = await map(contestants, async (c, i) => {
		const key = c.nameAsFileName;
		const headShotImg = await fs.readFile(`server/cropped-headshots/${key}.jpg`);

		const url = await uploadToS3(headShotImg, key);
		return {
			...c,
			headShotUrl: url,
			//this is so that the id is static and the relations will be the same no matter how many times this data gets seeded
			id: i + 1
		};
	});

	const maleContestantsToInsert = contestantsAfterHeadShotsUploaded
		.filter((c) => c.gender === 'M')
		.map((c) => ({
			id: c.id,
			age: Number(c.age),
			job: c.occupation,
			name: c.name,
			description: c.desc,
			imageUrl: c.img,
			headShotUrl: c.headShotUrl
		})) satisfies Array<typeof maleContestants.$inferInsert>;

	const femaleContestantsToInsert = contestantsAfterHeadShotsUploaded
		.filter((c) => c.gender === 'F')
		.map((c) => ({
			id: c.id,
			age: Number(c.age),
			job: c.occupation,
			name: c.name,
			description: c.desc,
			imageUrl: c.img,
			headShotUrl: c.headShotUrl
		})) satisfies Array<typeof femaleContestants.$inferInsert>;

	await db.insert(maleContestants).values(maleContestantsToInsert);
	await db.insert(femaleContestants).values(femaleContestantsToInsert);

	console.log('Contestants seeded');
	return {
		statusCode: 200,
		body: 'Contestants seeded'
	};
};

async function uploadToS3(file: Buffer, key: string) {
	try {
		const command = new PutObjectCommand({
			Key: key,
			Bucket: Resource.croppedHeadshots.name,
			Body: file,
			ContentType: 'image/jpeg'
		});

		await new S3Client().send(command);

		return `https://${Resource.croppedHeadshots.name}.s3.us-west-2.amazonaws.com/${encodeURI(key)}`;
	} catch (err) {
		console.error('Error uploading file to S3:', err);
		throw err;
	}
}
