import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

// app.use(
//     cors({
//         origin: 'https://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )

app.use(cors());


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


