const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    surname: Joi.string()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .email({ tlds: {allow: false} })
        .required(),

    student_id: Joi.number()
        .required(),

    date: Joi.date()
        .required(),

    time_in: Joi.string()
        .required(),

    time_out: Joi.string()
        .required(),
    
    pin: Joi.number().default(0000)
})


module.exports = schema