const express = require('express');
const router = express.Router();

const mainController = require('../controllers/maincontroller');

router.get('/', mainController.getHomePage);

module.exports = router;
