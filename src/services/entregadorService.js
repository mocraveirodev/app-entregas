import entregadorRepository from "../repositories/entregadorRepository.js";

class EntregadorService {
    async save(entregador) {
        await this.validateCpfCnpj(entregador.cpfCnpj);
        await this.validateEmail(entregador.email);

        const id = await entregadorRepository.save(entregador);

        return id;
    }

    async findAll() {
        return await entregadorRepository.findAll();
    }

    async findByUserWithEntregador(id) {
        return await entregadorRepository.findByUserWithEntregador(id);
    }

    async findByCpfCnpj(cpfCnpj) {
        return await entregadorRepository.findByCpfCnpj(cpfCnpj);
    }

    async validateCpfCnpj(cpfCnpj) {
        const entregador = await entregadorRepository.findByCpfCnpj(cpfCnpj);

        if (entregador) {
            throw new Error("Entregador already exists. $409");
        }
    }

    async validateEmail(email) {
        const entregador = await entregadorRepository.findByEmail(email);

        if (entregador) {
            throw new Error("Email already exists. $409");
        }
    }
}

export default new EntregadorService();