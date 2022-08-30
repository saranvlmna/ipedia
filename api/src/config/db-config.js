const { connect, connection } = require("mongoose");

const { config } = require("./app-config");
const { logger } = require("./winston");

const dbUrl = config.get("db.url");
const port = config.get("app.port");

// environment
const env = config.get("node_env");

const params = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

module.exports = {
  dbConfig: () => {
    connect(`${dbUrl}`, params);

    connection.on("connected", function () {
      logger.info(`DB has been connected to ${port}`);
    });
  }
};
