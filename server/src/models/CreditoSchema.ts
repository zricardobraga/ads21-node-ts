import { Schema } from 'mongoose';

const creditoSchema = new Schema({
    nome: {
        type: String,
        required: [true, "O campo Nome é obrigatório!"],
    },
    valor: {
        type: Number,
        required: [true, "O campo Valor é obrigatório!"],
        min: [1, "Valor mínimo de R$ 1,00"],
    }
    }, 
    {
        timestamps: true,
    }
);

export {creditoSchema};
