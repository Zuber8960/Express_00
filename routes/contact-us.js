const express = require('express');

// const rootDir = require('../views/contact-us.html')

const router = express.Router();

const contactController = require('../controllers/contact');

router.get('/contact-us', contactController.contactUsPage)

module.exports = router;














