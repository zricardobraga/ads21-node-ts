import { Request, Response } from "express";
import CicloSchema from "../models/CicloSchema";
class CicloController {
    
    async listar(request: Request, response: Response){ 
        try {
            const ciclos = await CicloSchema.find();
            response.status(200).json(ciclos); //response.json retorna conteúdo .json
        } catch (error) {
            response.status(400).json(error);
        } 
    }
    
    async cadastrar(request: Request, response: Response){ // o async tranforma o método cadastrar em assincrono. ler o artigo da alura sobre isso
        try {                                              // o try catch trata a exception do mesmo jeito que trata no java
            // const objetoRequisicao = request.body; //sintaxe usada anteriormente
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

    async deletarPorId(request: Request, response: Response){
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

    async deletarVarios(request: Request, response: Response){ 
        try {
            const ciclos = await CicloSchema.deleteMany();
            response.status(200).json({
                msg: "TUDO DELETADO!",
            }); //response.json retorna conteúdo .json
        } catch (error) {
            response.status(400).json(error);
        } 
    }

    async atualizarVarios(request: Request, response: Response){ 
        try {
            const cicloAtualizado = await CicloSchema.updateMany(request.body);
            response.status(200).json({
                objeto: cicloAtualizado,
                msg: "Atualizado!",
                erro: false
            }); //response.json retorna conteúdo .json
        } catch (error) {
            response.status(400).json({
                objeto: error,
                msg: "Não atualizou",
                erro: true
            });
        } 
    }
    // async buscarPorId(request: Request, response: Response){
    //     // console.log(request.params);
    //     const { id } = request.params; //o request.params serve para pegar/retornar os paSrametros informados na url  
    //     // console.log(id);
    //     const ciclo = await CicloSchema.find({ _id: id });
    //     response.status(200).json(ciclo);
    // }
}

export { CicloController };