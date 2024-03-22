import entregadorRepository from "../repositories/entregadorRepository.js";

class EntregadorController {
    async save(req, res) {
        const entregador = req.body;

        const cpfCpnjExists = await entregadorRepository.findByCpfCnpj(entregador.cpfCnpj);
        if (cpfCpnjExists) {
            return res.status(409).json({ error: "Entregador already exists" });
        }

        const emailExists = await entregadorRepository.findByEmail(entregador.email);
        if (emailExists) {
            return res.status(409).json({ error: "Email already exists" });
        }

        const id = await entregadorRepository.save(entregador);

        return res.status(201).json({ id });
    }

    async findAll(req, res) {
        const entregadores = await entregadorRepository.findAll();
        return res.status(200).json(entregadores);
    }

    async findByUserWithEntregador(req, res) {
        const id = req.params.id;
        const entregador = await entregadorRepository.findByUserWithEntregador(id);
        return res.status(200).json(entregador);
    }
}

export default new EntregadorController();
