import express from 'express';
import { mostrarTrabajos } from '../controllers/homeControllers.js';
import { formVacantes } from '../controllers/vacantesControllers.js';
const router = express.Router();

router.get('/', mostrarTrabajos);

//? Crear vacantes
router.get('/vacantes/nueva', formVacantes);

export default router;