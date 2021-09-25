const {  check } = require('express-validator');

exports.registerValidator = () => {
    return [
       check('name')
         .notEmpty()
         .withMessage('Name is required')
         .custom((val) => /^[A-ZŠĐČĆŽ][a-zšđčćž]{3,20}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{3,20})+$/.test(val))
          .withMessage('Name is not validate'),
      check('username')
        .notEmpty()
        .withMessage('Username is required')
        .custom((val) => /^[\w\-\@\+\?\!\.]{3,19}$/.test(val))
        .withMessage('Username is not validate')
        .exists()
        .withMessage('Username is exist'),
     check('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Email is not validate, please enter yours email address')
        .exists()
        .withMessage('Email is exist'),
      check('password')
        .notEmpty()
        .withMessage('Password is required')
        .custom((val) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\/\$\#\@\^])[A-Za-z\d]{8,}$/.test(val))
        .withMessage('Password is not validate, password should at least one uppercase letter, lowercase letter and digit,minimal 7 characters long'),
      check('confirmPassword')
        .notEmpty()
        .withMessage('Confirm password is required')
        .custom((value, { req }) => value === req.body.password)
        .withMessage('Confirm password is not validate')
   
    ]
  }


exports.loginValidator = () => {
  return [
    check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email is not validate, please enter yours email address')
    .exists()
    .withMessage('Email is exist'),
    check('password')
      .notEmpty()
      .withMessage('Password is required')
      .custom((val) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\/\$\#\@\^])[A-Za-z\d]{8,}$/.test(val))
      .withMessage('Password is not validate, password should at least one uppercase letter, lowercase letter and digit,minimal 7 characters long')
  ]
}

module.exports;