import mongoose from "mongoose";
import dotenv from 'dotenv';

export const db =  () => {
    mongoose.connect(process.env.DATABASES, {userNewUrlParser: true});
    mongoose.connection.on('error', error => console.log(error));
}
