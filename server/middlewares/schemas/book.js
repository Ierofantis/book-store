import Joi from "joi";

export const schemas = {
    book: Joi.object().keys({
        title: Joi.string().allow("").optional(),
        isbn: Joi.string()
            .guid({
                version: ["uuidv4", "uuidv5"],
            })
            .allow(null)
            .optional(),
        authorId: Joi.number().allow(null).optional(),
        publisherId: Joi.number().allow(null).optional(),
        description: Joi.string().allow("").optional(),
        visible: Joi.bool,
    }),
};
