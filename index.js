import express from "express";
import exphbs from 'express-handlebars';
import router from "./routes/index.js";

const app = express();

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

app.listen(4000);
console.log('Funcionando por el puerto 4000')