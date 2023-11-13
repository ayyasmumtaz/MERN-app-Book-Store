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


//add book
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

//get all book
app.get('/books', async (request, response) => {
    try{
        const books = await Book.find({})
        return response.status(200).json({
            count: books.length,
            data: books
        })
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

//update book by id
app.put('/books/:id', async (request, response) => {
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

        const {id} = request.params;
        
        const result = await Book.findByIdAndUpdate(id, request.body)
        if(!result){
            response.status(400).send({
                message: 'Book not found'
            });
        }
        response.status(400).send({
            message: 'Book updated successfully'
        });

    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})


//get specific book by id
app.get('/books/:id', async (request, response) => {
    try{
        const {id} = request.params;

        const book = await Book.findById(id)
        return response.status(200).json(book)
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})


app.delete('/books/:id', async (request, response) => {
    try{
        const {id} = request.params;

        const result = await Book.findByIdAndDelete(id)
        
        if(!result){
            response.status(400).send({
                message: 'Book not found'
            });
        }
        response.status(400).send({
            message: 'Book deleted successfully'
        });
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


