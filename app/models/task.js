const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Task = new Schema({
  task: { type: String, require: true },
  date: { type: Date, default: '12/31/9999' },
  status: { type: Boolean, require: true, default: true },
});

module.exports = mongoose.model('task', Task);
