import mongoose from "mongoose";

const treatmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    duration: { type: Number, required: true }, 
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Treatment", treatmentSchema);