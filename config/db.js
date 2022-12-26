import mongoose from "mongoose";
import dotenv from 'dotenv';

//? Configuración de dotenv
dotenv.config({path: '.env'});

try {
    await mongoose.connect(process.env.DATABASES);
    console.log('conexión exitosa');
} catch (error) {
    console.log(`Error en la conexión ${error}`)
}