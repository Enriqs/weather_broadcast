var APIKey = "07e72be19c548df5116996effef880f7";
var btn1El = document.querySelector('#btn1');
var btn1El = document.querySelector('#btn2');
var btn1El = document.querySelector('#btn3');
var btn1El = document.querySelector('#btn4');
var btn1El = document.querySelector('#btn5');
var btn1El = document.querySelector('#btn6');
var btn1El = document.querySelector('#btn7');
var btn1El = document.querySelector('#btn8');


function btnPressed(){
  var ciudad = document.querySelector('#search-input').value;
  var rightNow = moment().format('DD/MM/YYYY');

  if (!ciudad) {
    console.error('You need a search input value!');
    return;
  }
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=" + APIKey + "&units=imperial";
  
  fetch(queryURL)
  .then(function (response) {
    if (!response.ok) {
      throw response.json();
    }
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    document.getElementById('h3dis').textContent = data.name + "  " + rightNow + " " + data.weather[0].icon;
    document.getElementById('1li1').textContent = "Temp: " + data.main.temp +"°F" ;
    document.getElementById('1li2').textContent = "Wind: " + data.wind.speed;
    document.getElementById('1li3').textContent = "Humidity: " +  data.main.humidity + "%";
    document.getElementById('1li4').textContent = "UV Index: " ;
    document.getElementById('2li1').textContent = moment().format('DD/MM/YYYY');
    document.getElementById('2li2').textContent = data.weather[0].icon;
    document.getElementById('2li3').textContent = "Temp: " + data.main.temp +"°F" ;
    document.getElementById('2li4').textContent = "Wind: " + data.wind.speed;
    document.getElementById('2li5').textContent = "Humidity: " +  data.main.humidity +"%";
    document.getElementById('3li1').textContent = moment().format('DD/MM/YYYY');
    document.getElementById('3li2').textContent = data.weather[0].icon;
    document.getElementById('3li3').textContent = "Temp: " + data.main.temp +"°F" ;
    document.getElementById('3li4').textContent = "Wind: " + data.wind.speed;
    document.getElementById('3li5').textContent = "Humidity: " +  data.main.humidity +"%";
    document.getElementById('4li1').textContent = moment().format('DD/MM/YYYY');
    document.getElementById('4li2').textContent = data.weather[0].icon;
    document.getElementById('4li3').textContent = "Temp: " + data.main.temp +"°F" ;
    document.getElementById('4li4').textContent = "Wind: " + data.wind.speed;
    document.getElementById('4li5').textContent = "Humidity: " +  data.main.humidity +"%";
    document.getElementById('5li1').textContent = moment().format('DD/MM/YYYY');
    document.getElementById('5li2').textContent = data.weather[0].icon;
    document.getElementById('5li3').textContent = "Temp: " + data.main.temp +"°F" ;
    document.getElementById('5li4').textContent = "Wind: " + data.wind.speed;
    document.getElementById('5li5').textContent = "Humidity: " +  data.main.humidity +"%";
    document.getElementById('6li1').textContent = moment().format('DD/MM/YYYY');
    document.getElementById('6li2').textContent = data.weather[0].icon;
    document.getElementById('6li3').textContent = "Temp: " + data.main.temp +"°F" ;
    document.getElementById('6li4').textContent = "Wind: " + data.wind.speed;
    document.getElementById('6li5').textContent = "Humidity: " +  data.main.humidity +"%";

  })
  .catch(function (error) {
    console.error(error);
  });


  document.getElementById("oculto").style.visibility = "visible";


}
