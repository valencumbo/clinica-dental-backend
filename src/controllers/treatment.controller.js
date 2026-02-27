import TreatmentService from '../services/treatment.service.js';

class TreatmentController {
    
    async create(req, res) {
        try {
            const newTreatment = await TreatmentService.createTreatment(req.body);
            res.status(201).json({ 
                message: "Tratamiento creado con éxito", 
                data: newTreatment 
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const treatments = await TreatmentService.getAllTreatments();
            res.status(200).json({ 
                message: "Lista de tratamientos", 
                data: treatments 
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const updatedTreatment = await TreatmentService.updateTreatment(id, req.body);
            res.status(200).json({ 
                message: "Tratamiento actualizado", 
                data: updatedTreatment 
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedTreatment = await TreatmentService.deleteTreatment(id);
            res.status(200).json({ 
                message: "Tratamiento eliminado (desactivado)", 
                data: deletedTreatment 
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new TreatmentController();