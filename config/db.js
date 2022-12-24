import mongoose from "mongoose";
import dotenv from 'dotenv';

//? Modelos
import Vacantes from "../models/Vacantes.js";

export const db =  () => {
    mongoose.connect(process.env.DATABASES, {userNewUrlParser: true});
    mongoose.connection.on('error', error => console.log(error));
}
