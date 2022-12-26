import express from "express";
import mongoose from "mongoose";
import exphbs from 'express-handlebars';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import session from 'express-session';
import bodyParser from "body-parser";
import MongoStore from 'connect-mongo';
import './config/db.js';
import router from "./routes/index.js";
import { skills } from "./helpers/handlebars.js";

const app = express();

//? Configuración de dotenv
dotenv.config({path: '.env'});

//? Habilidar hadlebars como view
app.engine('handlebars', 
    exphbs.engine({
        defaultLayout: 'layout',
        helpers: skills
    })
);

//? Habilitar body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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