import express from "express";
import { router } from "./config/routes"; //importa o router para ser na server.ts ./ pra frente ../ pra trás
import { mongoose } from './config/database';
const app = express(); //criação da aplicação
const db = mongoose;  

console.clear();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("O servidor está rodando...");
});