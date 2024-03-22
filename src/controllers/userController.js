import userRepository from "../repositories/UserRepository.js";
import userValidator from "../validators/user.js";

class UserController {
    async save(req, res) {
        const user = req.body;
        const error = userValidator(res, user);

        if (error) {
            return res.status(422).json(error);
        }

        const userExists = await userRepository.findByUsername(user.username);

        if (userExists) {
            return res.status(409).json({ error: "User already exists" });
        }

        const id = await userRepository.save(user);

        return res.status(201).json({ id });
    }

    async findAll(req, res) {
        const users = await userRepository.findAll();
        return res.status(200).json(users);
    }
}

export default new UserController();
