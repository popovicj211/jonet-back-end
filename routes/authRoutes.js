const express = require('express');
const router = express.Router();
const {  check } = require('express-validator');
const {
 login,
 register
} = require('../controllers/AuthController')



router.route('/login').post(login);
router.route('/register').post(register);


module.exports = router

