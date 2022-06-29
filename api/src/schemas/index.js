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
                type: "string"
            },
            password: {
                type: "string"
            }
        },
        required: ["name", "email", "password","number"],
        additionalProperties: false
    },
};
