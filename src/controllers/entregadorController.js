import entregadorRepository from "../repositories/entregadorRepository.js";

class EntregadorController {
    async save(req, res) {
        const entregador = req.body;

        const cpfCpnjExists = await entregadorRepository.findByCpfCnpj(entregador.cpfCnpj);

        if (cpfCpnjExists) {
            return res.status(409).json({ error: "Entregador already exists" });
        }

        const id = await entregadorRepository.save(entregador);

        return res.status(201).json({ id });
    }

    async findAll(req, res) {
        const entregadores = await entregadorRepository.findAll();
        return res.status(200).json(entregadores);
    }
}

export default new EntregadorController();
