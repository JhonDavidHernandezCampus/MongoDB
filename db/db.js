import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
dotenv.config();

export async function conx(){
    try {
        
        const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@clusterprueba.83cam19.mongodb.net/${process.env.DB}`;
        //const uri = `mongodb+srv://root:3224757531@clusterprueba.83cam19.mongodb.net/db_campus_alquiler`;
        // console.log(uri);
        const option = {
            useNewUrlParser:true,
            useUnifiedTopology:true
        };
        const client = await MongoClient.connect(uri,option);
        return client.db();
    } catch (error){
        return {status:500, message:error};
    }
}