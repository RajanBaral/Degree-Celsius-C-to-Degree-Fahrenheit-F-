function degreeTofahrenheit(){
  let degree = document.getElementById('Celsius').value;
    let Fahrenheit = document.getElementById('fahrenheit').value = (degree * 9/5) + 32 ;
    document.getElementById('demo').innerHTML = degree + " degree celsius is equal to " + Fahrenheit + " degree Fahrenheit.";
  }
  
  degreeToFahrenheit.onclick = function(){
    degreeTofahrenheit();
  }
  
  
  