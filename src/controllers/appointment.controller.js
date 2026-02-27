import AppointmentService from '../services/appointment.service.js';

class AppointmentController {
    
    async create(req, res) {
        try {
            const newAppointment = await AppointmentService.createAppointment(req.body);
            res.status(201).json({ 
                message: "Turno reservado con éxito", 
                data: newAppointment 
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const appointments = await AppointmentService.getAllAppointments();
            res.status(200).json({ 
                message: "Lista de todos los turnos", 
                data: appointments 
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getByPatient(req, res) {
        try {
            const { patientId } = req.params;
            const appointments = await AppointmentService.getAppointmentsByPatient(patientId);
            res.status(200).json({ 
                message: "Turnos del paciente", 
                data: appointments 
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateStatus(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;
            const updatedAppointment = await AppointmentService.updateAppointmentStatus(id, status);
            res.status(200).json({ 
                message: "Estado del turno actualizado", 
                data: updatedAppointment 
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default new AppointmentController();