const { check, validationResult } = require("express-validator/check");
const logger = require("../../config/logger");
const Task = require("../models/task");

// Validate
exports.validate = () => {
  return [
    check("task", "task is required")
      .exists()
  ];
};

// GET task
exports.index = (req, res) => {
  Task.find({}, null, { sort: { date: 1 } }, (err, data) => {
    res.json(data);
  });
};

// POST task
exports.store = (req, res, next) => {
  // Error Handling
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  let reqDate;

  if (req.body.date !== "") {
    reqDate = req.body.date;
  }

  const task = new Task({
    task: req.body.task,
    date: reqDate,
    status: true
  });

  task.save(e => {
    if (e) {
console.log(e);
      logger.system.error(e);
      return next(e);
    }
    Task.find({}, null, { sort: { date: 1 } }, (err, data) => {
      res.json(data);
    });
  });
};

// DELETE task
exports.destroy = (req, res, next) => {
  Task.remove({ _id: req.params.name }, (err, data) => {
    if (e) {
      logger.system.error(e);
      return next(e);
    }
    Task.find({}, null, { sort: { date: 1 } }, (err, data) => {
      res.json(data);
    });
  });
};
