import express from "express";
import { createUser } from "../../controllers/user-controller.mjs";
const routes = express.Router();




routes.post("/signup", createUser);


export default routes;