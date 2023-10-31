import express, { request, response } from "express";
import { PORT } from "./config.js";

const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send(`Gabut SO`)
})

app.listen(PORT, () => {
    console.log(`This is PORT : ${PORT}`);
})