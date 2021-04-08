import { Request, Response } from "express";

class CicloController {
    
    listar(request: Request, response: Response){ 
        const jogo = {
          titulo: "CS",
          plataforma: "PC",
          valor: 50.99,
          genero: "FPS",
        };
        response.json(jogo); //response.json retorna conteúdo .json
      }

    cadastrar(request: Request, response: Response){
        const objeto = request.body;
        // console.log(objeto);
        response.json(objeto);
    }
    
    buscarPorId(request: Request, response: Response){
        // console.log(request.params);
        const { param1, param2, param3 } = request.params; //o request.params serve para pegar/retornar os parametros informados na url  
        const jogo = {
            titulo: "CS GO",
            plataforma: "PC",
            valor: 50.99,
            genero: "FPS",
            param1,
            param2,
            param3,
        };
        response.json(jogo);
    }
}

export { CicloController };