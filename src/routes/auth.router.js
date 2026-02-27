import express from 'express'
import authController from '../controllers/auth.controller.js'
import { body } from 'express-validator'
import { validateInput } from '../middlewares/validation.middleware.js'

const authRouter = express.Router()

authRouter.post(
    '/register', 
    [
        // reglas
        body('email').isEmail().withMessage('Debe ser un correo electrónico válido'),
        body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
        
        validateInput 
    ],
    authController.register
)

authRouter.post(
    '/login',
    [
        body('email').isEmail().withMessage('Debe ser un correo electrónico válido'),
        body('password').notEmpty().withMessage('La contraseña es obligatoria'),
        validateInput
    ],
    authController.login
)

authRouter.get(
    '/verify-email',
    authController.verifyEmail
)

export default authRouter