var token = "";

/* *
 * Configura login e logout do Usuário
 * */
function login(form){
  if(validarLogin(form)){
      var dados = {
          email: form["email"].value,
          password: form["password"].value
      };
      form.reset();
      requestAPI("POST", "https://reqres.in/api/login", responseLogin, dados, 400);
  }
}

function responseLogin(xhttp){
  var response = JSON.parse(xhttp.responseText);
  if(response.token == null){
    console.log("Error: "+response.error);
  }else{
    token = response.token;
    console.log(token);
  }
}

function logout(){
  var btnlogin = document.getElementsByClassName("login"),
      btnlogout = document.getElementsByClassName("logout");
  token = "";
  btnlogin.style.display = none;
  btnlogout.style.display = block;
}