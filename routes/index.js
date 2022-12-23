import express from 'express';
import { mostrarTrabajos } from '../controllers/homeControllers.js';
const router = express.Router();

router.get('/', mostrarTrabajos);

export default router;