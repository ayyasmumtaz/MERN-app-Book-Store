import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import  { Book }  from "./models/bookModel.js";

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send(`Pen jadi backedn developer`)
})

app.post('/books', async (request, response) => {
    try{
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ){
            response.status(400).send({
                message: 'Send all required fields: title, author, publishYear'
            });
        }

        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        }

        const book = await Book.create(newBook);

        return response.status(201).send(book);

    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

mongoose.
    connect(mongoDBURL).
    then(() => {
        console.log("Succes")
        app.listen(PORT, () => {
            console.log(`This is PORT : ${PORT}`);
        })
    }).catch((error) => {
        console.log(error);
    })

