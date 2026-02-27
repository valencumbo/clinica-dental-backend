import { validationResult } from 'express-validator';

export const validateInput = (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            message: "Error de validación en los datos enviados",
            errors: errors.array()
        });
    }
    
    next();
};