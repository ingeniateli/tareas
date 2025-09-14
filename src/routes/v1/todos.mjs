import express from "express";
import { createTodo, deleteTodo, getTodosByUser } from "../../controllers/todo-controller.mjs";
const routes = express.Router();




routes.get("/", getTodosByUser);
// routes.get("/:id", controlador);
routes.post("/", createTodo);
// routes.put("/", controlador);
// routes.patch("/", controlador);
routes.delete("/", deleteTodo);



export default routes;