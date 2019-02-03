const express = require('express');
const apicontroller = require('../app/controllers/apicontroller');

const router = express.Router();

router.get('/task', apicontroller.index);
router.post('/task', apicontroller.store);
//router.post('/task', apicontroller.validate, apicontroller.store);

module.exports = router;
