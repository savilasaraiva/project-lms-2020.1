function validarLogin(form){
  var email = form["email"].value;
  var password = form["password"].value;

  if(email.length == 0){
      alert("Ops! Preencha o campo email");
      return false;
  }

  if(password.length == 0){
      alert("Ops! Preencha o campo senha");
      return false;
  }
  return true;
}