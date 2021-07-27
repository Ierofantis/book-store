import Joi from "joi";

export const schemas = {
    book: Joi.object().keys({
        title: Joi.string().required(),
        isbn: Joi.number().required(),
        authorId: Joi.number().allow(null).optional(),
        publisherId: Joi.number().allow(null).optional(),
        description: Joi.string().required(),
        visible: Joi.bool(),
    }),

    publisher: Joi.object().keys({
        name: Joi.string().required(),
        telephone: Joi.number().required(),
        address: Joi.string().required(),
    }),

    author: Joi.object().keys({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().required(),
        birth: Joi.date().timestamp()
    }),
};
