import { relations, sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const femaleContestants = sqliteTable('femaleContestants', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	age: integer('age').notNull(),
	job: text('job').notNull(),
	name: text('name').notNull(),
	description: text('description').notNull(),
	imageUrl: text('imageUrl').notNull(),
	headShotUrl: text('headShotUrl').notNull(),
	createdAt: text('createdAt')
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull()
});

export const maleContestants = sqliteTable('maleContestants', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	age: integer('age').notNull(),
	job: text('job').notNull(),
	name: text('name').notNull(),
	description: text('description').notNull(),
	imageUrl: text('imageUrl').notNull(),
	headShotUrl: text('headShotUrl').notNull(),
	createdAt: text('createdAt')
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull()
});

export const matches = sqliteTable('matches', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	userId: text('userId').notNull(),
	maleContestantId: integer('maleContestantId').notNull(),
	femaleContestantId: integer('femaleContestantId').notNull(),
	marriageGuess: integer('marriageGuess', { mode: 'boolean' }).default(false).notNull(),
	createdAt: text('createdAt')
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text('updatedAt')
		.default(sql`CURRENT_TIMESTAMP`)
		.$onUpdate(() => sql`CURRENT_TIMESTAMP`)
});

export const lockedInUsers = sqliteTable('lockedInUsers', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	userId: text('userId').notNull(),
	lockedInAt: text('lockedInAt')
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull()
});

export const matchesRelations = relations(matches, ({ one }) => ({
	maleContestant: one(maleContestants, {
		fields: [matches.maleContestantId],
		references: [maleContestants.id]
	}),
	femaleContestant: one(femaleContestants, {
		fields: [matches.femaleContestantId],
		references: [femaleContestants.id]
	}),
	user: one(lockedInUsers, {
		fields: [matches.userId],
		references: [lockedInUsers.userId]
	})
}));

export const lockedInUsersRelations = relations(lockedInUsers, ({ many }) => ({
	matches: many(matches)
}));
