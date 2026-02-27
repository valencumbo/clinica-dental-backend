# Clínica Dental - API Backend

Sistema de gestión de turnos y tratamientos odontológicos desarrollado con Node.js y arquitectura por capas.

## Instalación y Configuración
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Configurar el archivo `.env` siguiendo el ejemplo de `.env.example`.
4. Ejecutar `npm run dev` para iniciar en modo desarrollo.

## Arquitectura
El proyecto aplica principios de separación de responsabilidades:
- **Routes:** Manejo de endpoints.
- **Controllers:** Orquestación de peticiones.
- **Services:** Lógica de negocio y validaciones de existencia (Paciente/Tratamiento).
- **Repositories:** Interacción con MongoDB Atlas (Mongoose).

## Endpoints Principales
- **Auth:** `POST /api/auth/register` | `POST /api/auth/login`
- **Tratamientos:** `GET /api/treatments` | `POST /api/treatments`
- **Turnos:** `GET /api/appointments` | `POST /api/appointments`

## Despliegue
- **URL API:** https://clinica-dental-backend.vercel.app