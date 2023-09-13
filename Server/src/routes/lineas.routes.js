import {Router} from 'express'

import LineasController from '../controllers/lineas.controller.js'

class RouterLineas {
    constructor(){
        this.router = Router()
        this.controlador = new LineasController()
    }

    start() {
        this.router.get("/lineas",this.controlador.getAll)
        this.router.post("/lineas",this.controlador.create)
        this.router.get("/lineas/:id",this.controlador.getById)
        this.router.put("/lineas/:id",this.controlador.edit)
        this.router.delete("/lineas/:id",this.controlador.delete)

        return this.router
    }
}


export default RouterLineas