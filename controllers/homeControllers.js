import {Vacantes} from '../models/Vacantes.js'

//? Muestra los trabajos en el home
export const mostrarTrabajos = async (req, res, next) => {
    //* Obtener vacantes
    const vacantes = await Vacantes.find().lean();

    if(!vacantes) return next();


    res.render('home', {
        pagina: 'DevJobs',
        tagLine: 'Encuentra y pública trabajos para Developers',
        barra: true,
        boton: true,
        vacantes
    });
}