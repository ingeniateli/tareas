import express from "express"
import "dotenv/config";
import { connectMongo } from "./config/mongo-config.mjs";
import { connectRedis } from "./config/redis-config.mjs";
import v1Rutas from "./routes/v1/todos.mjs";
import v1Publicas from "./routes/v1/public.mjs";

import { xssSanitizer } from "./middlewares/sanitizer-middleware.mjs";





const app = express();
const port = process.env.port ?? 3000;

connectMongo();
connectRedis();


app.use(express.json());

//middelware sanitizado
app.use(xssSanitizer)



app.use("/api/v1", v1Publicas);


app.use("/api/v1/todos", v1Rutas);


app.listen(port, () => console.log(`Escuchando en el puerto: ${port}`));









