import { Router, Request, Response } from "express"; //router é módulo dentro do express que trata das rotas
import { CicloController } from "../controllers/CicloController";
import { } from "./database" 

const router = Router();
const cicloController = new CicloController(); //intanciando o objeto CicloController

// router.get("/", function(request: Request, response: Response){
//     response.send("Hello World com ts-node-dev teste!"); //response.send retorna conteúdo .html
//   });
  
router.get("/ciclo/listar", cicloController.listar);
  
router.get("/ciclo/listar/:param1/:param2/:param3", cicloController.buscarPorId);
  
router.post("/ciclo/cadastrar", cicloController.cadastrar);

export { router };  //exporta o router

