import express from 'express';
import { mostrarTrabajos } from '../controllers/homeControllers.js';
import { crearVacante, formVacantes, mostrarVacante } from '../controllers/vacantesControllers.js';
const router = express.Router();

router.get('/', mostrarTrabajos);

//? Crear vacantes
router.get('/vacantes/nueva', formVacantes);
router.post('/vacantes/nueva', crearVacante);

//? Mostrar Vacante
router.get('/vacantes/:url', mostrarVacante);

export default router;