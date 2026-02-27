import Treatment from '../models/Treatment.model.js';

class TreatmentRepository {
    // Crear un nuevo tratamiento
    async create(treatmentData) {
        return await Treatment.create(treatmentData);
    }

    // Traer todos los tratamientos
    async findAll() {
        return await Treatment.find({ isActive: true });
    }

    // Traer un tratamiento por ID
    async findById(id) {
        return await Treatment.findById(id);
    }

    // Actualizar un tratamiento
    async update(id, updateData) {
        return await Treatment.findByIdAndUpdate(id, updateData, { new: true });
    }

    // Borrar un tratamiento
    async delete(id) {
        return await Treatment.findByIdAndUpdate(id, { isActive: false }, { new: true });
    }
}

export default new TreatmentRepository();