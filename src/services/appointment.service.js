import AppointmentRepository from '../repositories/appointment.repository.js';
import userRepository from '../repositories/user.repository.js';
import TreatmentRepository from '../repositories/treatment.repository.js';

class AppointmentService {
    
    // Crear un turno
    async createAppointment(data) {
        const patientExists = await userRepository.findById(data.patient);
        if (!patientExists) {
            throw new Error("El paciente no existe en la base de datos");
        }

        // Verificar que el tratamiento exista
        const treatmentExists = await TreatmentRepository.findById(data.treatment);
        if (!treatmentExists) {
            throw new Error("El tratamiento solicitado no existe");
        }

        return await AppointmentRepository.create(data);
    }

    // Obtener todos los turnos
    async getAllAppointments() {
        return await AppointmentRepository.findAll();
    }

    // Obtener los turnos de un paciente específico
    async getAppointmentsByPatient(patientId) {
        return await AppointmentRepository.findByPatientId(patientId);
    }

    // Cambiar el estado de un turno
    async updateAppointmentStatus(id, status) {
        const validStatuses = ['pending', 'completed', 'cancelled'];
        if (!validStatuses.includes(status)) {
            throw new Error("Estado no válido. Debe ser 'pending', 'completed' o 'cancelled'");
        }
        
        const updated = await AppointmentRepository.updateStatus(id, status);
        if (!updated) {
            throw new Error("Turno no encontrado");
        }
        return updated;
    }
}

export default new AppointmentService();