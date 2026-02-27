import express from 'express';
import AppointmentController from '../controllers/appointment.controller.js';

const router = express.Router();

// Crear un turno nuevo
router.post('/', AppointmentController.create);

// Ver todos los turnos
router.get('/', AppointmentController.getAll);

// Ver los turnos de un paciente especifico
router.get('/patient/:patientId', AppointmentController.getByPatient);

// Cambiar el estado de un turno
router.patch('/:id/status', AppointmentController.updateStatus);

// editar 
router.put('/:id', AppointmentController.update); 

// eliminar
router.delete('/:id', AppointmentController.delete); 

export default router;