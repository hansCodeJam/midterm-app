const express = require('express');
const router = express.Router();
const basketballController = require('../../controllers/nbaController');

router.route('/updates').get(basketballController);

module.exports = router;