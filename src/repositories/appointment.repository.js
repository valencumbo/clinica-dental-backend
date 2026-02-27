import Appointment from '../models/Appointment.model.js';

class AppointmentRepository {
    // Crear un turno nuevo
    async create(appointmentData) {
        return await Appointment.create(appointmentData);
    }

    // Traer todos los turnos
    async findAll() {
        return await Appointment.find()
            .populate('patient', 'username email phone') // Trae los datos del usuario
            .populate('treatment', 'name price duration'); // Trae los datos del servicio
    }

    // 3. Traer turnos de un paciente especifico
    async findByPatientId(patientId) {
        return await Appointment.find({ patient: patientId })
            .populate('treatment', 'name duration');
    }

    // Cambiar el estado del turno
    async updateStatus(id, status) {
        return await Appointment.findByIdAndUpdate(id, { status }, { new: true });
    }
}

export default new AppointmentRepository();