const logger = require('log4js').getLogger();

// GET index
exports.index = function (req, res) {
  res.render('tasks');
};
