const logger = require("../../config/logger");

// GET index
exports.index = (req, res) => {
  res.render("tasks");
};
