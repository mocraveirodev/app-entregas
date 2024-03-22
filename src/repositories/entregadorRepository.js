import database from "../config/database.js";

class EntregadorRepository {
    async save(user) {
        const [id] = await database('entregador').insert(user);

        return id;
    }

    async findAll() {
        return await database('entregador').select();
    }

    async findByCpfCnpj(cpfCnpj) {
        return await database('entregador').select()
            .where({ cpfCnpj })
            .first();
    }
}

export default new EntregadorRepository();