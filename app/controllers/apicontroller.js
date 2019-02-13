const { check, validationResult } = require('express-validator/check');
const Task = require('../models/task');

// Validate
exports.validate = () => {
  return [
    check('task', 'task is required').not().exists(),
  ];
};

// GET task
exports.index = (req, res) => {
  Task.find({}, null, { sort: { date: 1 } }, (err, data) => {
    console.log(data);
    res.json(data);
  });
};

// POST task
exports.store = (req, res) => {
  // Error Handling
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //return res.status(422).json({ errors: errors.array() });
    return res.status(404).json({ errors: errors(msg) });
  }

  let reqDate;

  if (req.body.date !== '') {
    reqDate = req.body.date;
  }

  const task = new Task({
    task: req.body.task,
    date: reqDate,
    status: true,
  });

  task.save((e) => {
    if (e) {
      return next(e);
    }
    Task.find({}, null, { sort: { date: 1 } }, (err, data) => {
      res.json(data);
    });
  });
};
