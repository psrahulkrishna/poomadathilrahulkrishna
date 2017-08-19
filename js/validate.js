function validation()
{
    var yourname = document.form.yourname;
    var username = document.form.username;
    var email    = document.form.email;
    var number   = document.form.number;
    var company  = document.form.company;
    var workexp  = document.form.workexp;
    var password = document.form.password;
    var confirmp = document.form.confirmp;
  
    if(yourname_validation(yourname))
    {
    if(allletter(username))
    {
    if(validateEmail(email))
    {
    if(validatePhone(number))
    {
    if(company_validation(company))
    {
    if(workexp_validation(workexp))
    {
    if(password_validation(password,6,12))
    {
    if(matched(password,confirmp))
    {
    }
    }
    }
    }
}
}
}
}
return false;
}

// *Your name Validation
function yourname_validation(yourname)
{
    var yourname_val = yourname.value;
    if(yourname_val == "")
        {
            yourname.focus();
            document.getElementById("errorYourname").innerHTML = "name can't be blank";
            return false;
        }
    if(!isNaN(yourname_val))
        {
            document.getElementById("errorYourname").innerHTML = "name can't be number";
            return false;
        }
    if(yourname_val)
        {
            document.getElementById("errorYourname").innerHTML = "";
            return true;
        }
}

// *User name Validation
function allletter(username)
{
    var letters = /^[A-Z]*$/
    
    if(username.value == "")
        {
            document.getElementById("errorUsername").innerHTML = "username can't be blank";
            return false;
        }
    if(username.value.match(letters))
        {
            document.getElementById("errorUsername").innerHTML = "";
            return true;
        }
    else
        {
            document.getElementById("errorUsername").innerHTML = "username must have alphabet characters only";
            username.focus();
            return false;
        }
  
}
// *Email Validation
function validateEmail(email)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value == "")
        {
            document.getElementById("errorEmail").innerHTML = "email can't be blank";
            return false;
        }
    if(email.value.match(mailformat))
        {
            document.getElementById("errorEmail").innerHTML = "";
            return true;
        }
    else
        {
           document.getElementById("errorEmail").innerHTML = "you have entered an invalid email address!";
           email.focus();
           return false;
    }
}

// *Phone number Validation
function validatePhone(number)
{
    var number_len = number.value.length;
    var number_val = number.value;
    if(number_val == "")
        {
            document.getElementById("errorno").innerHTML = "phone no can't be blank";
            return false;
        }
     if(isNaN(number_val))
        {
            document.getElementById("errorno").innerHTML = "character not allowed";
            return false;
        }
    if(number_len !== 10)
        {
             document.getElementById("errorno").innerHTML = "phone no contain 10 numbers";
             return false;
        }
   
    if(number_len)  
        {
            document.getElementById("errorno").innerHTML = "";
            return true;
        }

     
}

// *Company Validation
function company_validation(company)
{
    company_val = company.value;
    if(company_val == "")
        {
            document.getElementById("errorCompany").innerHTML = "can't be blank";
            return false;
        }
    else
        {
            document.getElementById("errorCompany").innerHTML = "";
            return true;
        }
}

// *Work exp Validation
function workexp_validation(workexp)
{
    var workexp = workexp.value;
    if(workexp == "")
        {
            document.getElementById("workExp").innerHTML = "can't be blank";
            return false;
        }
    else
        {
            document.getElementById("workExp").innerHTML = "";
            return true;
        }
}


// *Password Validation
function password_validation(password,mx,my)
{
    var password_len = password.value.length;
    if(password_len == 0 || password_len >= my || password_len < mx)
        {
            document.getElementById("errorPassword").innerHTML = "password should not be empty / length be between "+mx+" to "+my;
            password.focus();
            return false;

        }
    else
        {
            document.getElementById("errorPassword").innerHTML = "";
            return true;
        }
}

// *Password confirm Validation
function matched(password,confirmp)
{
  var password = password.value;
  var confirmp = confirmp.value;

  if(confirmp == "")
    {
        document.getElementById("confirmP").innerHTML = "can't be blank";
        return false;
    }
  
  if(password !== confirmp)
    {
        document.getElementById("confirmP").innerHTML = "password not matched";
        return false;
    }
  if(confirmp)
    {
       document.getElementById("confirmP").innerHTML = "";
       return true; 
    }
}



