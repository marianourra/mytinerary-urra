const joi = require('joi')

const validator = (req, res, next) => {

    const schema = joi.object ({

        userName: joi.string().max(12).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min' : 'El usuario debe contener mas de 3 caracteres',
            'string.max' : 'El usuario no puede contener mas de 12 caracteres'
        }),

        password: joi.string().required().trim().max(18).min(8).messages({
        'string.min' : 'El password debe contener al menos 8 caracteres',
        'string.max' : 'El password no puede contener mas de 18 caracteres'
        })
    })
        
    const validation = schema.validate(req.body, {abortEarly: false})

    if (validation.error) {

        return res.json ({ success: false, response: validation.error.details})
    }

    next()


}

module.exports = validator