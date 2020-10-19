/* *
 * Esculta Eventos
 * */
function disparaEventos(){
  var form = document.getElementById("form-login");
  
  form.addEventListener("submit", function(event){
      event.preventDefault();
      login(this);
  });

  var card = document.getElementsByClassName("card-gallery");
  
  for(var i=0; i<card.length; i++){
    card[i].addEventListener("click", handleClickCard);
  }
}

function handleClickCard(){
  var btn = this.getElementsByTagName("button");
  if(btn[0].style.display === "none"){
      btn[0].style.display = "block";
  }else{
      btn[0].style.display = "none";
  }
}