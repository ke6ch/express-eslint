const express = require('express');
const apicontroller = require('../app/controllers/apicontroller');

const router = express.Router();

router.get('/', apicontroller.index);

module.exports = router;
