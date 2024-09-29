import { relations } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const femaleContestants = sqliteTable('femaleContestants', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	age: integer('age').notNull(),
	job: text('job').notNull(),
	name: text('name').notNull(),
	description: text('description').notNull(),
	imageUrl: text('imageUrl').notNull(),
	headShotUrl: text('headShotUrl').notNull()
});

export const maleContestants = sqliteTable('maleContestants', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	age: integer('age').notNull(),
	job: text('job').notNull(),
	name: text('name').notNull(),
	description: text('description').notNull(),
	imageUrl: text('imageUrl').notNull(),
	headShotUrl: text('headShotUrl').notNull()
});

export const matches = sqliteTable('matches', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	userId: text('userId').notNull(),
	maleContestantId: integer('maleContestantId').notNull(),
	femaleContestantId: integer('femaleContestantId').notNull()
});

export const matchesRelations = relations(matches, ({ one }) => ({
	maleContestant: one(maleContestants, {
		fields: [matches.maleContestantId],
		references: [maleContestants.id]
	}),
	femaleContestant: one(femaleContestants, {
		fields: [matches.femaleContestantId],
		references: [femaleContestants.id]
	})
}));
