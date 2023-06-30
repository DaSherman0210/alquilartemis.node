import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";
const app = express();

app.set("port", 5000);

app.use(express.json());

// Routes 

app.use("/api/", categoriaRoutes);

export default app;