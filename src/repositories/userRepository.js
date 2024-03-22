import database from "../config/database.js";

class UserRepository {
    async save(user) {
        const [id] = await database('users').insert(user);

        return id;
    }
}

export default new UserRepository();