function degreeTofahrenheit(){
  let degree = document.getElementById('Celsius').value;
  let Fahrenheit = document.getElementById('fahrenheit').value = (degree * 9/5) + 32 ;
  document.getElementById('demo').innerHTML = degree + " degree celsius is equal to " + Fahrenheit + " degree Fahrenheit.";
  if (degree == ""){
    let degree = document.getElementById('Celsius').value = 0;
    document.getElementById('demo').innerHTML = degree + " degree celsius is equal to " + Fahrenheit + " degree Fahrenheit.";

  }
  if(isNaN(degree)){
    alert("the input is not valid.")
    document.getElementById('Celsius').value ='';
    document.getElementById('fahrenheit').value  ='';
    document.getElementById('demo').innerHTML='';

  }
 
  }
  degreeToFahrenheit.onclick = function(){
    degreeTofahrenheit();
  }
  
  
  