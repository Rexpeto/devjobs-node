import express from "express";
import mongoose from "mongoose";
import exphbs from 'express-handlebars';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { db } from "./config/db.js";
import router from "./routes/index.js";

const app = express();

//? Configuración de dotenv
dotenv.config({path: '.env'});

//? Habilidar hadlebars como view
app.engine('handlebars', 
    exphbs.engine({
        defaultLayout: 'layout'
    })
)

app.set('view engine', 'handlebars');

//? Static Files
app.use(express.static('public'));

//? Cookie
app.use(cookieParser());

//? Session

app.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.DATABASES})
}))

//? rutas
app.use('/', router)

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Funcionando por el puerto ${port}`)