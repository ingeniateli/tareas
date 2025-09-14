import Todo from "../../model/todo.mjs";



const todoMongoRepository = {

    async createTodo(data) {
        try {
            const todo = new Todo(data)
            return await todo.save();
        } catch (error) {
            console.log('No se pudo crear la tarea en mongo', error)
        }
    },

    //obtener una tarea del usuario
    async getTodoByUser(data) {
        const { userId, todoId } = data;
        return Todo.findOne(data);
    },

    //todas las tareas del usuario
    async getAllTodos(data) {
        //validar
        const { userId } = data;
        return Todo.find(userId);
    },


    //borrar tarea
    async deleteTodo(data) {
        const { todoId } = data;
        if (todoId) {
            Todo.deleteOne(todoId);
        } else {
            return new Error("Hubo un error al borrar la tarea, el id no puede ser nulo");
        }
    },
    //reemplaza el viejo por el nuevo
    async replaceTodo(data) {
        return Todo.findOneAndReplace(data);
    },

    //actualiza la tarea
    async updateTodo() {
        return Todo.findOneAndUpdate(data);
    }
}


export default todoMongoRepository;