import express from "express";
import cors from "cors"
import config from "./config.js";

import RouterLineas from './routes/lineas.routes.js'
import RouterChoferes from "./routes/choferes.routes.js";
const app = express()

app.set("port", config.port)

app.use(express.json());
app.use(cors());

app.use('/api', new RouterLineas().start())
app.use('/api', new RouterChoferes().start())

export default app