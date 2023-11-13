import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";

const app = express();


app.use(express.json());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send(`Pen jadi backedn developer`)
})

app.use('/books', booksRoute);

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


