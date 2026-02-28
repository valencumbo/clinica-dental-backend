# 🦷 Clínica Dental - API Backend

Sistema integral de gestión de turnos y pacientes odontológicos desarrollado con Node.js, Express y MongoDB. 

Este proyecto es el backend de la aplicación, encargado de manejar la lógica de negocio, la persistencia de datos y la seguridad mediante autenticación con JWT y verificación por correo electrónico.

## 🚀 Tecnologías Utilizadas
- **Entorno:** Node.js + Express
- **Base de Datos:** MongoDB Atlas (Mongoose)
- **Seguridad:** bcrypt (Hashing de contraseñas) y JSON Web Tokens (JWT)
- **Validaciones:** express-validator
- **Mailing:** Nodemailer (Verificación de cuentas)
- **Despliegue:** Vercel

## ⚙️ Instalación y Configuración Local
1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Crear un archivo `.env` en la raíz del proyecto basándose en el `.env.example` y configurar las variables (MongoDB URI, JWT Secret, credenciales de Nodemailer, etc.).
4. Ejecutar `npm run dev` para iniciar el servidor en modo desarrollo.

## 🏗️ Arquitectura
El proyecto aplica principios de separación de responsabilidades (Arquitectura en Capas):
- **Routes:** Definición de endpoints y aplicación de middlewares (CORS, validaciones, auth).
- **Controllers:** Manejo de las peticiones (req/res) y orquestación.
- **Services:** Lógica de negocio core de la aplicación.
- **Repositories:** Capa de acceso a datos e interacción directa con MongoDB.

## 📡 Endpoints Principales y Documentación
La documentación detallada de cada endpoint y sus ejemplos de peticiones se encuentran en la colección de Postman incluida en este repositorio.

*Puedes importar el archivo `postman_collection.json` (ubicado en la raíz del proyecto) directamente en tu aplicación de Postman.*

**Resumen de Rutas:**
- **Auth:** `POST /api/auth/register` | `POST /api/auth/login` | `GET /api/auth/verify-email`
- **Tratamientos (CRUD):** `GET`, `POST`, `PUT`, `DELETE` en `/api/treatments` (Rutas protegidas)
- **Pacientes (CRUD):** `GET`, `POST`, `PUT`, `DELETE` en `/api/patients` (Rutas protegidas)
- **Turnos (CRUD):** `GET`, `POST`, `PUT`, `DELETE` en `/api/appointments` (Rutas protegidas)

## Despliegue
- **URL API:** https://clinica-dental-backend.vercel.app