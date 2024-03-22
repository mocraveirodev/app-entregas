import database from "../config/database.js";

class UserRepository {
    async save(user) {
        const [id] = await database('users').insert(user);

        return id;
    }

    async findAll() {
        return await database('users').select();
    }

    async findByUsername(username) {
        return await database('users').select()
            .where({ username })
            .first();
    }
}

export default new UserRepository();