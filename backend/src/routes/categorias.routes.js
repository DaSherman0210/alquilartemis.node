import { Router } from "express";

import { methodsHTTP as categoriaController } from "../controllers/categoria.controllers.js";
import { methodsHTTP as categoriaControllerC } from "../controllers/constructoras.controllers.js";


const router = Router();

 //Categorias

router.get("/categorias", categoriaController.getCategorias);
router.post("/categorias", categoriaController.addCategories);
router.get("categorias/:id", categoriaController.getCategoria);
router.delete("categorias/:id", categoriaController.deleteCategoria);
router.put("categorias/:id", categoriaController.updateCategories);

// Constructoras

router.get("/constructoras", categoriaControllerC.getConstructoras);
router.post("/constructoras", categoriaControllerC.addConstructora);
router.get("/constructoras/:id", categoriaControllerC.getConstructora);
router.delete("/constructoras/:id", categoriaControllerC.deleteConstructora);
router.put("/constructoras/:id", categoriaControllerC.updateConstructora);

export default router;