import { Usuarios } from "../models/Usuarios.js";
import {check, validationResult} from 'express-validator';

//? Formulario de register
export const register = (req, res) => {
    res.render('crear-cuenta', {
        pagina: 'Crear cuenta',
        tagLine: 'Comienza a públicar tus vacantes gratis'
    });
}

//? Validar formulario
export const validarFormulario = async (req, res, next) => {
    await check('nombre').notEmpty().trim().withMessage('El nombre es obligatorio').run(req);
    await check('email').isEmail().withMessage('El correo debe ser válido').run(req);
    await check('password').notEmpty().trim().withMessage('La contraseña no puede estar vacia').run(req);
    await check('password_r').notEmpty().trim().withMessage('Confirmar password no puede estar vacia').run(req);
    await check('password_r').equals('password').withMessage('La contraseña no coincide').run(req);

    const resultado = validationResult(req);

    const errores = resultado.errors;

    
    if(resultado) {
        //* Si hay errores
        req.flash('error', errores.map(error => error.msg));

        res.render('crear-cuenta', {
            pagina: 'Crear cuenta',
            tagLine: 'Comienza a públicar tus vacantes gratis',
            mensajes: req.flash(),
            trix: true
        });

        return;
    }
    return next();
}

//? Crear cuenta de reclutador
export const storageRegister = async (req, res) => {
    //* Crear el usuario
    const usuario = new Usuarios(req.body);

    const nuevoUsuario = await usuario.save();

    if(!nuevoUsuario) return res.redirect('/');

    res.redirect('/iniciar-sesion');
}