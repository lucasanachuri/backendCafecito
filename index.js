import express from "express";
import morgan from "morgan";
import "dotenv/config"; //permite procesar variables de entorno
import productoRouter from "./src/routes/products.routes.js";

// 1- configuraciones iniciales
const app = express();
// crear una variable
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
});

// 2- middlewares: son funciones con tareas especificas q se agregan antes de las rutas
app.use(cors());
app.use(express.json()); //permite interpretar datos en formato json
app.use(express.urlencoded({ extended: true })); //ayuda a interpretar datos del body en el request
app.use(morgan("dev")); //nos da mas info en la terminal

// 3- crear las rutas
app.use('/api',productoRouter)