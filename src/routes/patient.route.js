import express from 'express';
import { createPatient, getPatients, getPatientById, updatePatient } from '../controllers/patient.controller.js';

const patientRouter = express.Router();

patientRouter.post('/', createPatient);
patientRouter.get('/', getPatients);
patientRouter.get('/:id', getPatientById);
patientRouter.put('/:id', updatePatient); 

export default patientRouter;