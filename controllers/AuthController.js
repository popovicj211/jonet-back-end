const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {registerValidator} = require('../validation/AuthValidation');
const login = async (req,res) => {   
        console.log(req.body)
        let params = req.body;
        let email = params.email;
        let password = params.password;
       let errors = [];
        await User.find({'email':email,'password':password}).then(
          () => res.status(200).json({message:'Login is successfully'})
        ).catch(err => res.status(500).json('Error: ' + err));

};

const register = (req,res) => {
    console.log(req.body)
      const { name, username, email, password ,confirmPassword , active } = req.body;

    /*  if (!( name && username && email && password && confirmPassword  && active)) {
       return res.status(400).send("All input is required");
      }
  */
      const role = "Admin";

  /*    const registerValidatorErrors = registerValidator(name , username ,email, password, confirmPassword, active , User);

      console.log(registerValidatorErrors);*/
     
   /*   const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).json({ success: false , error: "User Already Exist. Please Login"});
      }

      if(registerValidatorErrors.length !== 0){
        return res.status(422).json({ success: false , errors: registerValidatorErrors});
      }*/
  
    const encryptedPassword = bcrypt.hash(password, 10);
     const encryptedConfirmPassword = bcrypt.hash(confirmPassword, 10);

   
    //   const user = new User({ name: name, username: username,email: email ,password: encryptedPassword , confirmPassword: encryptedConfirmPassword,role: role ,active: active});
    //   return user.save().then(() => res.status(201).json({message:'Register is successfully'})).catch(err => res.status(500).json('Error: ' + err));
    return res.status(201).then(() => json({ name: name, username: username,email: email ,password: encryptedPassword , confirmPassword: encryptedConfirmPassword,role: role ,active: active})).catch(err => res.status(500).json('Error: ' + err));

};


module.exports = {
    login,
    register
  }