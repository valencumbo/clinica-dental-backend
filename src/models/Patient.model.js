import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: [true, 'El nombre es obligatorio'] 
    },
    lastName: { 
        type: String, 
        required: [true, 'El apellido es obligatorio'] 
    },
    phone: { 
        type: String, 
        required: [true, 'El teléfono es obligatorio'] 
    },
    email: { 
        type: String,
        default: ''
    },
    clinicalHistory: { 
        type: String, 
        default: 'Sin antecedentes relevantes.' 
    }
}, { 
    timestamps: true
});

export default mongoose.model('Patient', patientSchema);