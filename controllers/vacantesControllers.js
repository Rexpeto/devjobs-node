import mongoose from "mongoose"
import { Vacantes } from "../models/Vacantes.js";

//? Muestra formulario de crear vacantes
export const formVacantes = (req, res) => {
    res.render('nueva-vacante', {
        pagina: 'Nueva vacante',
        tagLine: 'Llena el formulario para agregar una vacante',
        barra: true,
        trix: true
    })
}

//? Crea una nueva vacante
export const crearVacante = async (req, res) => {
    try {
        const {skills} = req.body;
        const vacante = new Vacantes(req.body);

        // * Crear arreglo de habilidades
        vacante.skills = skills.split(',');

        //* Almacenar en la bd
        const nuevaVacante = await vacante.save();

        //* redireccionar al almacenar en la bd
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}