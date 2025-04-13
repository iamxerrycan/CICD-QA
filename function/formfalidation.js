//formvalidation function

let validationfoem = (formdata) => {
  let error ={};
  let name = formdata.name;
  let email = formdata.email;
  let password = formdata.password;

  if (!name) {
    error.name = "Name is required";
  } else if (!/^[A-Za-z\s]+$/.test(name)) {
    error.name = "Name should only contain letters and spaces";
  }

  if (!email) {
    error.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    error.email = "Invalid email format";
  }

  if (!password) {
    error.password = "Password is required";
  } else if (password.length < 6) {
    error.password = "Password should be at least 6 characters long";
  }

  return error;
}


function submit (formdata){
  let error = validationfoem(formdata);

  if(Object.keys(error).length === 0){
    console.log("Form submitted successfully");
  }
  else{
    console.log("Form submission failed");
    console.log(error);
  }
  return error;
}

module.exports = {
  validationfoem,
  submit
}