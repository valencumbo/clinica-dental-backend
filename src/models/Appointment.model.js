import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patient: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Patient",
        required: true 
    },
    treatment: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Treatment",
        required: true 
    },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    status: { 
        type: String, 
        enum: ['pending', 'completed', 'cancelled'], 
        default: 'pending' 
    },
    notes: { type: String }
}, { timestamps: true });

export default mongoose.model("Appointment", appointmentSchema);