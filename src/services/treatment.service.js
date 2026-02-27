import TreatmentRepository from '../repositories/treatment.repository.js';

class TreatmentService {
    async createTreatment(data) {
        if (data.price <= 0 || data.duration <= 0) {
            throw new Error("El precio y la duración deben ser mayores a 0");
        }
        return await TreatmentRepository.create(data);
    }

    async getAllTreatments() {
        return await TreatmentRepository.findAll();
    }

    async getTreatmentById(id) {
        const treatment = await TreatmentRepository.findById(id);
        if (!treatment) {
            throw new Error("Tratamiento no encontrado");
        }
        return treatment;
    }

    async updateTreatment(id, data) {
        const updatedTreatment = await TreatmentRepository.update(id, data);
        if (!updatedTreatment) {
            throw new Error("Tratamiento no encontrado para actualizar");
        }
        return updatedTreatment;
    }

    async deleteTreatment(id) {
        const deletedTreatment = await TreatmentRepository.delete(id);
        if (!deletedTreatment) {
            throw new Error("Tratamiento no encontrado para eliminar");
        }
        return deletedTreatment;
    }
}

export default new TreatmentService();