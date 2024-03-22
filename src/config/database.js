import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();

const database = knex({
    client: 'mysql',
    connection: {
        host: process.env.DATABASE_HOST || 'localhost',
        port: process.env.DATABASE_PORT || 3306,
        user: process.env.DATABASE_USER || 'root',
        password: process.env.DATABASE_PASSWORD || 'root',
        database: process.env.DATABASE_NAME || 'entregas',
    },
});

export default database;
