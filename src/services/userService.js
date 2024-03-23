import userRepository from "../repositories/UserRepository.js";
import userValidator from "../validators/user.js";

class UserService {
    async save(user) {
        this.validateUser(user);
        await this.validateUsername(user.username);

        const id = await userRepository.save(user);

        return id;
    }

    async findAll() {
        return await userRepository.findAll();
    }

    validateUser(user) {
        const error = userValidator(user);
        if (error) {
            throw new Error(`${error.details[0].message}. $422`);
        }
    }

    async validateUsername(username) {
        const user = await userRepository.findByUsername(username);

        if (user) {
            throw new Error("Username already exists. $409");
        }
    }
}

export default new UserService();
