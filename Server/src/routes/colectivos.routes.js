import { Router } from 'express';
import ColectivosController from '../controllers/colectivos.controller.js';
ddd
class RouterChoferes {
    constructor() {
        this.router = Router();
        this.controlador = new ColectivosController();
    }

    start() {
        this.router.get("/choferes", this.controlador.getAll);
        this.router.post("/choferes", this.controlador.create);
        this.router.get("/choferes/:id", this.controlador.getById);
        this.router.put("/choferes/:id", this.controlador.edit);
        this.router.delete("/choferes/:id", this.controlador.delete);

        return this.router;
    }
}

export default RouterChoferes;
