import userRepository from "../repositories/user-repository.mjs";


export const createUser = async (req, res) => {
    try {
        const user = req.body;
        const userSaved = await userRepository.createTodo(user);
        res.status(200).json({ usuario: userSaved });
    } catch (error) {
        res.status(400).json({ message: "No pudo crear usuario" });
    }
} 