const express = require('express');
const taskcontroller = require('../app/controllers/taskcontroller');

const router = express.Router();

router.get('/', taskcontroller.index);

module.exports = router;
