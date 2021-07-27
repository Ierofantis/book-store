import Joi from "joi";

export const schemas = {
    book: Joi.object().keys({
        id: Joi.number().allow(null).optional(),
        title: Joi.string().allow("").optional(),
        isbn: Joi.number().allow(null).optional(),
        authorId: Joi.number().allow(null).optional(),
        publisherId: Joi.number().allow(null).optional(),
        description: Joi.string().allow("").optional(),
        visible: Joi.bool(),
    }),

    publisher: Joi.object().keys({
        username: Joi.string().allow("").optional(),
        email: Joi.string().allow("").optional(),
        password: Joi.string().allow("").optional(),
    }),

    author: Joi.object().keys({
        first_name: Joi.string().allow("").optional(),
        last_name: Joi.string().allow("").optional(),
        email: Joi.string().allow("").optional(),
        birth: Joi.date().timestamp()
    }),
};
