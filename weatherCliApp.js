let request = require('request');
const argv = require('yargs').argv;
let apiKey = 'fb749890f7a7e03effe6d5eb27daeaf7';
let city = argv.c || 'bangalore';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if (err) {
    console.log('error:', error);
  } else {
    let weather1 = JSON.parse(body)

    let message1 = `The Longitude and Latitide of ${weather1.name} is ${weather1.coord.lon} and ${weather1.coord.lat}`;
    let message2 = `It's ${(Number(weather1.main.temp) - 273)} degree in ${weather1.name}!`;
    let message3 = `We can describe it as :-  " ${weather1.weather[0].description}" !`;
    let message4 = `The Humidity Level is ${weather1.main.humidity} !`;
    let message5 = `${weather1.name} is located in ${weather1.sys.country}`
    console.log(message5)
    console.log(message1)
    console.log(message2);
    console.log(message3);
    console.log(message4);
  }
});