const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Task = new Schema({
  no: { type: Number, require: true, unique: true },
  task: { type: String, require: true },
  date: { type: Date, default: Date(9999-12-31) },
  status: { type: Boolean, require: true, default: true },
});

module.exports = mongoose.model('task', Task);
