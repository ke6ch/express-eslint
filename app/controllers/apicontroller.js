const Task = require('../models/task');

exports.index = (req, res) => {
  Task.find({}, null, { sort: { date: 1 } }, (err, data) => {
    res.json(data);
  });
};

exports.store = (req, res) => {
  res.send('store');
};
