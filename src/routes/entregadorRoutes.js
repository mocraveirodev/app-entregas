import { Router } from 'express';
import entregadorController from '../controllers/entregadorController.js';

const router = Router();

router.get('/', entregadorController.findAll);
router.get('/user/:id', entregadorController.findByUserWithEntregador);
router.post('/', entregadorController.save);

export default router;
