import { Router } from "express"; //router é módulo dentro do express que trata das rotas
import { CicloController } from "../controllers/CicloController";

const router = Router();
const cicloController = new CicloController();

router.post("/ciclo/cadastrar", cicloController.cadastrar);
router.get("/ciclo/buscarPorId/:id", cicloController.buscarPorId);
router.get("/ciclo/listar", cicloController.listar);
router.put("/ciclo/alterar", cicloController.alterar);
router.delete("/ciclo/deletar/:id", cicloController.deletar);

export { router }; 

