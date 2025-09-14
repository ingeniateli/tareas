import userMongoRepository from "../repositories/mongo-repository/user-mongo-repository.mjs";
import todoRepository from "../repositories/todo-repository.mjs";



export const createTodo = async (req, res) => {
    try {
        const todo = req.body;
        const todoSaved = await todoRepository.createTodo(todo);
        res.status(200).json({ tarea: todoSaved });
    } catch (error) {
        res.status(400).json({ message: "No pudo crear la tarea" });
    }
}


//obtener tareas del usuario 
export const getTodosByUser = async (req, res) => {
    try {
        const { userId } = req.user;
        const userTodos = await todoRepository.getAllTodos(userId);
        res.status(200).json({ tareas: userTodos });
    } catch (error) {
        res.status(400).json({ message: "No pudo obtener las tareas" });
    }
}



//borrar una tarea 
export const deleteTodo = async (req, res) => {
    try {
        const { todoId } = req.param;
        await todoRepository.deleteTodo(todoId);
        res.status(200).json({ message: "Se borro correctamente" });
    } catch (error) {
        res.status(400).json({ message: "No pudo obtener las tareas" });
    }
}