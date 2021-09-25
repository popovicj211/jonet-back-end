exports.serviceValidator = () => {
    return [
      check('name')
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