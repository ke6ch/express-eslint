const express = require('express');
const apicontroller = require('../app/controllers/apicontroller');

const router = express.Router();

router.get('/task', apicontroller.index);
router.post('/task', apicontroller.store);

module.exports = router;
