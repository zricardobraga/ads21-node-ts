import { Request, Response } from "express";
import CicloSchema from "../models/CicloSchema";
class CicloController {
    
    async listar(request: Request, response: Response){ 
        try {
            const ciclos = await CicloSchema.find();
            response.status(200).json(ciclos);
        } catch (error) {
            response.status(400).json(error);
        } 
    }
    
    async cadastrar(request: Request, response: Response){ 
        try {                                              
            const novoCiclo = await CicloSchema.create(request.body);
            // console.log(objetoCadastrado);
            response.status(201).json({
                objeto: novoCiclo,
                msg: "Ciclo cadastrado com sucesso",
                erro: false
            });
        } catch (error) {
            response.status(400).json({
                objeto: error,
                msg: "Falha na validação",
                erro: true
            });
        }
    }
    
    async buscarPorId(request: Request, response: Response) {
        
        try {
            const { id } = request.params;
            const ciclo = await CicloSchema.findById({ _id: id });
            response.status(200).json(ciclo);
        } catch (error) {
            response.json(error);
        } 
    }
      
    async alterar (request: Request, response: Response) {
        try {
            const { id } = request.params;
            response.status(200).json(await CicloSchema.updateOne({id}, request.body));
        } catch (error) {
            response.json(error);
        }
    }

    async deletar (request: Request, response: Response){
        try {
            const { id } = request.params;
            const ciclo = await CicloSchema.deleteOne({ _id: id});
            response.status(200).json({
            objeto: ciclo,
            msg: "Ciclo deletado!",
            erro: false
            });
        } catch (error) {
            response.json({
                objeto: error,
                msg: "Erro ao tentar deletar",
                erro: true
            });
        }
    }   
}

export { CicloController };