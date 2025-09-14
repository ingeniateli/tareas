import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo desde Express en Vercel!");
});

export default app;
