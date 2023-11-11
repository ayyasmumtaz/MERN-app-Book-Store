import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send(`Pen jadi backedn developer`)
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
    