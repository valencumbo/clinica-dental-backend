import Patient from '../models/Patient.model.js';

export const createPatient = async (req, res) => {
    try {
        const newPatient = new Patient(req.body);
        const savedPatient = await newPatient.save();
        
        res.status(201).json({ 
            ok: true, 
            message: 'Paciente creado exitosamente', 
            data: savedPatient 
        });
    } catch (error) {
        res.status(500).json({ 
            ok: false, 
            message: 'Error al crear el paciente', 
            error: error.message 
        });
    }
};

export const getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json({ 
            ok: true, 
            data: patients 
        });
    } catch (error) {
        res.status(500).json({ 
            ok: false, 
            message: 'Error al obtener los pacientes', 
            error: error.message 
        });
    }
};

export const getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) return res.status(404).json({ ok: false, message: 'Paciente no encontrado' });
        
        res.status(200).json({ ok: true, data: patient });
    } catch (error) {
        res.status(500).json({ ok: false, message: 'Error al obtener el paciente', error: error.message });
    }
};

export const updatePatient = async (req, res) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        
        if (!updatedPatient) return res.status(404).json({ ok: false, message: 'Paciente no encontrado' });

        res.status(200).json({ ok: true, message: 'Paciente actualizado', data: updatedPatient });
    } catch (error) {
        res.status(500).json({ ok: false, message: 'Error al actualizar', error: error.message });
    }
};