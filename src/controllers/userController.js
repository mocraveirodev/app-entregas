import userRepository from "../repositories/UserRepository.js";

class UserController {
    async save(req, res) {
        const user = req.body;
        const id = await userRepository.save(user);

        return res.status(201).json({ id });
    }
}

export default new UserController();
