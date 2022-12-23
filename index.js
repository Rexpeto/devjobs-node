import express from "express";
import exphbs from 'express-handlebars';
import dotenv from 'dotenv';
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

app.use('/', router)

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Funcionando por el puerto ${port}`)