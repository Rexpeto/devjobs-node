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

//? Mostrar un vacante
export const mostrarVacante = async (req, res) => {
    const {url} = req.params;

    const vacante = await Vacantes.findOne({url}).lean();

    //* Si no hay vacantes
    if(!vacante) return res.redirect('/');

    res.render('mostrar-vacante', {
        pagina: `Vacante de ${vacante.titulo}`,
        tagLine: `La empresa ${vacante.empresa} solicita developer en ${vacante.titulo}`,
        barra: true,
        vacante
    })
}

//? Editar las vacantes
export const editarVacante = async (req, res) => {
    const {url} = req.params;

    const vacante = await Vacantes.findOne({url}).lean();

    if(!vacante) return res.redirect('/');

    res.render('editar-vacante', {
        pagina: `Editar la vacante ${vacante.titulo}`,
        tagLine: `La vacante es de la empresa ${vacante.empresa}`,
        barra: true,
        trix: true,
        vacante
    })
}

//? Guardar edición
export const guardarEditVacante = async (req, res) => {
    const {url} = req.params;
    const vacanteActulizado = req.body;

    vacanteActulizado.skills = req.body.skills.split(',');

    const vacante = await Vacantes.findOneAndUpdate({url}, vacanteActulizado, {
        new: true,
        runValidators: true
    });

    res.redirect(`/vacantes/${url}`);
}