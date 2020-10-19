function requestAPI(metodo, url, funcao, dados, status){
  if(status == undefined){
      status = 200;
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if(xhttp.readyState == 4 && xhttp.status == status){
        funcao(this);
      }
  };
  xhttp.open(metodo, url, true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  if(dados == undefined){
      xhttp.send();
  }else{
      xhttp.send(JSON.stringify(dados));
  } 
}