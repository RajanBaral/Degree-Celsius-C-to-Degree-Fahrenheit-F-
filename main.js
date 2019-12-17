function dTof(){
let degree = document.getElementById('d').value;
  let g = document.getElementById('fer').value = (degree * 9/5) + 32 ;
  document.getElementById('demo').innerHTML = g;
}

c.onclick = function(){
 dTof();
}


