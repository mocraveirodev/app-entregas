import knex from 'knex';

const database = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'your_database_user',
        password: 'your_database_password',
        database: 'myapp_test',
    },
});

export default database;