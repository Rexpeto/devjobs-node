import express from 'express';
import { register, storageRegister } from '../controllers/usuarioControllers.js';
import { mostrarTrabajos } from '../controllers/homeControllers.js';
import { crearVacante, editarVacante, formVacantes, guardarEditVacante, mostrarVacante } from '../controllers/vacantesControllers.js';
const router = express.Router();

router.get('/', mostrarTrabajos);

//? Crear vacantes
router.get('/vacantes/nueva', formVacantes);
router.post('/vacantes/nueva', crearVacante);

//? Mostrar Vacante
router.get('/vacantes/:url', mostrarVacante);

//? Editar vacante
router.get('/vacantes/edit/:url', editarVacante);
router.post('/vacantes/edit/:url', guardarEditVacante);

//? Register
router.get('/register', register);
router.post('/register', storageRegister);

export default router;