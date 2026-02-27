import express from 'express';
import cors from 'cors';
import { connectMongoDB } from "./config/mongoDB.config.js";
import authRouter from "./routes/auth.router.js";
import treatmentRouter from "./routes/treatment.route.js";
import appointmentRouter from "./routes/appointment.route.js";

// Conectar a la base de datos
connectMongoDB();

// Crear un servidor web (Express app)
const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Rutas de la API (Endpoints)
app.use("/api/auth", authRouter);
app.use("/api/treatments", treatmentRouter);
app.use("/api/appointments", appointmentRouter);

// Levantar el servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Backend de la Clínica Dental corriendo en el puerto ${PORT}`);
});