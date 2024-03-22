import database from "../config/database.js";

class EntregadorRepository {
    async save(user) {
        const [id] = await database('entregador').insert(user);

        return id;
    }

    async findAll() {
        return await database('entregador').select();
    }

    async findByUserWithEntregador(id) {
        return await database('entregador')
            .select(["users.username", "users.type", "entregador.*"])
            .where("entregador.id", "=", id)
            .innerJoin('users', 'users.id', 'entregador.id_user')
            .first();
    
    }

    async findByCpfCnpj(cpfCnpj) {
        return await database('entregador').select()
            .where({ cpfCnpj })
            .first();
    }

    async findByEmail(email) {
        return await database('entregador').select()
            .where({ email })
            .first();
    }
}

export default new EntregadorRepository();