import { Router } from "express"; //router é módulo dentro do express que trata das rotas
import { CicloController } from "../controllers/CicloController";
// import { } from "./database" 

const router = Router();
const cicloController = new CicloController(); //intanciando o objeto CicloController

// router.get("/", function(request: Request, response: Response){
//     response.send("Hello World com ts-node-dev teste!"); //response.send retorna conteúdo .html
//   });
  
router.get("/ciclo/listar", cicloController.listar);

router.get("/ciclo/deletarVarios", cicloController.deletarVarios);
  
router.get("/ciclo/listar/:id", cicloController.buscarPorId);
  
router.post("/ciclo/cadastrar", cicloController.cadastrar);

router.get("/ciclo/deletar/:id", cicloController.deletarPorId);

export { router };  //exporta o router

