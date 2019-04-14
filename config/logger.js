const dotenv = require("dotenv").config();
const log4js = require("log4js");

log4js.configure({
  appenders: {
    system: { type: "dateFile", filename: "logs/system.log" },
    access: { type: "dateFile", filename: "logs/access.log" }
  },
  categories: {
    default: { appenders: ["system"], level: process.env.LOG4JS_LOG_LEVEL },
    access: { appenders: ["access"], level: process.env.LOG4JS_LOG_LEVEL }
  }
});

module.exports = {
  system: log4js.getLogger("system"),
  express: log4js.connectLogger(log4js.getLogger("access"), {
    level: log4js.levels.AUTO
  })
};
