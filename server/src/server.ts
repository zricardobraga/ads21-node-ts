import { mongoose } from './config/database';
import express from "express";
import {Request, Response} from "express"; //as chaves servem para desestruturar o modulo do express para retirar só o que iremos precisar nesse momento. no caso o Request e o Response
import { router } from "./config/routes"; //importa o router para ser na server.ts ./ pra frente ../ pra trás
const app = express(); //criação da aplicação

const db = mongoose;  

console.clear();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("O servidor está rodando...");
});