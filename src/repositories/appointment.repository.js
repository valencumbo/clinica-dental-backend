import Appointment from '../models/Appointment.model.js';

class AppointmentRepository {
    // Crear un turno nuevo
    async create(appointmentData) {
        return await Appointment.create(appointmentData);
    }

    // Traer todos los turnos
    async findAll() {
        return await Appointment.find()
            .populate('patient', 'firstName lastName phone email') 
            .populate('treatment', 'name price duration'); 
    }

    // 3. Traer turnos de un paciente especifico
    async findByPatientId(patientId) {
        return await Appointment.find({ patient: patientId })
            .populate('patient', 'firstName lastName phone')
            .populate('treatment', 'name duration');
    }

    // Cambiar el estado del turno
    async updateStatus(id, status) {
        return await Appointment.findByIdAndUpdate(id, { status }, { new: true });
    }

    // Actualizar un turno completo
    async update(id, updateData) {
        return await Appointment.findByIdAndUpdate(id, updateData, { new: true });
    }

    // Eliminar un turno
    async delete(id) {
        return await Appointment.findByIdAndDelete(id);
    }

    async findById(id) {
        return await Appointment.findById(id).populate('patient').populate('treatment');
    }

}

export default new AppointmentRepository();