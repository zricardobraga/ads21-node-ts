import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:admin@clustertopicosespeciais.lo2df.mongodb.net/TopicosEspeciaisDeSistema?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
    console.log("Aplicação conectada no banco de dados!")})
    .catch((error) => {
        console.log(`Erro ao conectar com o banco: ${error}`);
    });

export { mongoose };

