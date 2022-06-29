const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const { BadRequestError } = require("../errors");

const ajv = new Ajv();

addFormats(ajv, { mode: "fast", formats: ["email"] });

module.exports = (schema) => {
  return (req, _res, next) => {
    const validate = ajv.compile(schema);
    if (validate(req.body)) {
      return next();
    }
    const errors = validate.errors.map((err) => {
      return {
        message: err.message,
        keyword: err.keyword,
        params: err.params,
        instancePath: err.instancePath
      };
    });
    return next(new BadRequestError("validation error", errors));
  };
};
