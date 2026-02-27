import express from 'express';
import TreatmentController from '../controllers/treatment.controller.js';
// import { authMiddleware, isAdmin } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', TreatmentController.getAll);


router.post('/', TreatmentController.create);
router.put('/:id', TreatmentController.update);
router.delete('/:id', TreatmentController.delete);

export default router;