import express from "express";
//Fix para __direname
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//Server
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto",app.get("port"));

//Configuración
app.use(express.static(__dirname + "/public"));



//Rutas
app.get("/",(req,res) => res.sendFile(__dirname + "/pages/login.html"));
app.get("/register",(req,res) => res.sendFile(__dirname + "/pages/register.html"));