"use strict"

const weatherBlock = document.querySelector('#weather');

async function loadWeather(e) {
  weatherBlock.innerHTML = 
  <div class="weather__loading">
    <img src="img/loading.gif" alt="Loading..."></img>
  </div>;

  const server = 'https://api.openweathermap.org/data/2.5/weather?q=Moscow,+7&appid=97d73d66e3bb775677619107b698a01b';
  const response = await fetch(server, {
    method: 'GET',
  });
  const responseResult = await response.json();

  if (response.ok) {
    getWeather(responseResult);
  } else {
    weatherBlock.innerHTML = responseResult.message;
  }
}

function getWeather(data){
  //вывод данных
}

if (weatherBlock) {
  loadWeather();
}