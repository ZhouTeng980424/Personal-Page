function checkForm() {
  var name = document.forms["contact"]["name"].value;
  var email = document.forms["contact"]["email"].value;
  var subject = document.forms["contact"]["subject"].value;
  var message = document.forms["contact"]["message"].value;
  var emailPattern=/\S+@\S+\.\S+/;
  var isValid = true;

  if(name == "") {
  document.getElementById('nameError').innerHTML="Name must  be filled out";
  isValid =  false;
}else{

    document.getElementById('nameError').innerHTML="";
}


if(email == "") {
  document.getElementById('emailError').innerHTML="Email must be filled out";
  isValid =  false;
}else if(!emailPattern.test(email)){
document.getElementById('emailError').innerHTML="A valid email format is required ";
   isValid =  false;
}else{
 document.getElementById('emailError').innerHTML="";
}


if(subject == "") {
document.getElementById('subjectError').innerHTML="Please select a subject";
isValid =  false;
}
else{
  document.getElementById('subjectError').innerHTML="";
}

if(message == "") {
document.getElementById('messageError').innerHTML="Message must be not blank";
isValid =  false;
}
else{
  document.getElementById('subjectError').innerHTML="";
}



return isValid;
}
