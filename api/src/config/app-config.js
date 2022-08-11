const convict = require('convict');
const { url } = require('convict-format-with-validator');

const schema = {
    app: {
        port: {
            doc: 'The port to bind.',
            format: 'port',
            default: 4578,
            env: 'PORT',
        }
    },
    node_env: {
        doc: "The application environment.",
        format: ["dev", "prod", "test"],
        default: "dev",
        env: "NODE_ENV"
    },
    db: {
        url: {
            default: "mongodb://localhost/vLmNa",
            env: "DB_URL"
        },
    },
    google: {
        clientID: {
            default: 'CLIENT_ID_NOT_SET',
            env: 'GOOGLE_CLIENT_ID',
        },
        clientSecret: {
            default: 'CLIENT_SECRET_NOT_SET',
            env: 'GOOGLE_CLIENT_SECRET',
            sensitive: true,
        },
        callbackURL: {
            default: '/auth/google/callback',
            env: 'GOOGLE_CALLBACK_URL',
        },
        scope: {
            format: Array,
            default: ['email', 'profile'],
        },
        pkce: {
            format: Boolean,
            default: true,
        },
        state: {
            format: Boolean,
            default: true,
        },
    },
    frontendUrl: {
        default: 'http://localhost:4200/',
        env: 'FRONTEND_URL',
    },
}

convict.addFormat(url);
const config = convict(schema).validate({ allowed: "strict" });
module.exports = { config };