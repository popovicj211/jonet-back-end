

  const validationData = (errors , data , regEx , errorMsg , requMsg) =>{
       
          if(data == ''){
            errors.push(requMsg);
          }else{
            if(!regEx.test(data.trim())){
              errors.push(errorMsg);
           }
          }
  }
  
  const passwordsEquals = (errors , password , confirmPassword , errorMsg, requMsg) =>{
  
    if(data == ''){
      errors.push(requMsg);
    }else{
      if(password.trim() !== confirmPassword.trim()){
        errors.push(errorMsg);
     }
    }
  }

exports.registerValidator = (name , username ,email, password, confirmPassword, active , User) => {

    const errors = [];
    
      validationData(errors , name , /^[A-ZŠĐČĆŽ][a-zšđčćž]{3,20}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{3,20})+$/ , "Name is not validate" , "Name is required");
      validationData(errors , username , /^[\w\-\@\+\?\!\.]{3,19}$/ , "Username is not validate", "Username is required");
     validationData(errors , email , /^[\w]+[\.\_\-\w\d]*\@(gmail\.com)$/ , "Email is not validate", "Email is required");
      validationData(errors , password , /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\/\$\#\@\^])[A-Za-z\d]{8,}$/ , "Password is not validate, password should at least one uppercase letter, lowercase letter and digit,minimal 7 characters long" , "Password is required");
     passwordsEquals(errors , password , confirmPassword , "Confirm password is not validate", "Confirm password is required");

     
return errors;
  

}
module.exports;
