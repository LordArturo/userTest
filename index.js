
const serverless = require('serverless-http');
const config = require('./config');
const logger = require('./logger');
const ExpressServer = require('./expressServer');

const db = require("./models");
//db.sequelize.sync();

const launchServer = async () => {
  try {
    this.expressServer = new ExpressServer(config.URL_PORT, config.OPENAPI_YAML);
    this.expressServer.launch();
    logger.info('Express server running');
  } catch (error) {
    logger.error('Express Server failure', error.message);
    await this.close();
  }
};

/**
 * LOCAL
 */
//
//launchServer().catch(e => logger.error(e));


/**
 * SERVER
 */
 this.expressServer = new ExpressServer(config.URL_PORT, config.OPENAPI_YAML);
 this.expressServer.launch();
 this.app = this.expressServer.getApp();
 module.exports.handler = serverless(this.app);