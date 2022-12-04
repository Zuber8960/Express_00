const express = require('express');
const successController = require('../controllers/contact');

const router = express.Router();

router.post('/success', successController.successPage);

module.exports = router;