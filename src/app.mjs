import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hola en desarrollo Vercel!");
});

export default app;
