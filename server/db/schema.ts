import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const idkYet = sqliteTable('idkYet', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true })
});
