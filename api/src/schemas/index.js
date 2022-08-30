module.exports = {
  userSchema: {
    type: "object",
    properties: {
      name: {
        type: "string"
      },
      email: {
        type: "string",
        format: "email"
      },
      number: {
        type: "string" || "number"
      },
      password: {
        type: "string" || "number"
      }
    },
    required: ["name", "email", "phone", "password"],
    additionalProperties: true
  },

  loginSchema: {
    type: "object",
    properties: {
      email: {
        type: "string",
        format: "email"
      },
      password: {
        type: "string"
      }
    },
    required: ["email", "password"],
    additionalProperties: false
  }
};
