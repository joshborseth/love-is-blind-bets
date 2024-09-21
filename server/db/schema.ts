import { relations } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const contestants = sqliteTable('contestants', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	gender: text('gender', { enum: ['male', 'female'] }).notNull()
});

export const matches = sqliteTable('matches', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	userId: text('userId').notNull(),
	maleContestantId: integer('maleContestantId').notNull(),
	femaleContestantId: integer('femaleContestantId').notNull()
});

export const matchesRelations = relations(matches, ({ one }) => ({
	maleContestant: one(contestants, {
		fields: [matches.maleContestantId],
		references: [contestants.id]
	}),
	femaleContestant: one(contestants, {
		fields: [matches.femaleContestantId],
		references: [contestants.id]
	})
}));
