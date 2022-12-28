import { Usuarios } from "../models/Usuarios.js";

//? Formulario de register
export const register = (req, res) => {
    res.render('crear-cuenta', {
        pagina: 'Crear cuenta',
        tagLine: 'Comienza a públicar tus vacantes gratis'
    });
}

//? Crear cuenta de reclutador
export const storageRegister = async (req, res) => {
    //* Crear el usuario
    const usuario = new Usuarios(req.body);

    const nuevoUsuario = await usuario.save();

    if(!nuevoUsuario) return res.redirect('/');

    res.redirect('/iniciar-sesion');
}