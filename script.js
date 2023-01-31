var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var app = document.querySelector('.weather_app');
var mmain = document.querySelector('.icon');
var locationIcon = document.querySelector('.weather-icon');
var dateOutput = document.querySelector('.date');
var timeOutput = document.querySelector('.time');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var cloudsvalue = data['weather'][0]['main']
  var iconvalue = data['weather'][0]['icon']
  var {icon} = data['weather'][0];
  var newTemp = tempValue - 273
  newTemp = newTemp.toFixed(2);
  // var sunrise = data['sys']['sunrise'];
  // var timezone = data['timezone'];
  // timetime = sunrise + timezone;
  // timereal = new Date(timetime * 1000)
  //timeOutput = new Date((data.sys.sunrise + data.timezone) * 1000) 
  

  main.innerHTML = nameValue;
  desc.innerHTML = descValue;
  temp.innerHTML = newTemp + "°C";
  clouds.innerHTML = cloudsvalue;
  icon.innerHTML = iconvalue;
  //timeOutput.innerHTML = time;
  locationIcon.innerHTML = `<img src="https://openweathermap.org/img/w/${icon}.png">`
  input.value ="";
  
  if (iconvalue.includes("d")) {
    document.getElementById("weather_app").style.backgroundImage = "url(./sunshine_bg.jpg)";
    document.getElementById("button").style.backgroundColor = "#fa6d1b";
  } else if (iconvalue.indexOf("n")) {
    document.getElementById("weather_app").style.backgroundImage = "url(./night_bg.jpg)";
    document.getElementById("button").style.backgroundColor = "#e2e2e2";
  }




  //reformat the date
  dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}, ${m}, ${y}`;
  

})

  
})
