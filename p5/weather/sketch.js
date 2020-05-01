var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;


function setup() {
  createCanvas(400, 400);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&';
  var myIDString = 'appid=85b99c5bb846b0a85273d2bf020d2da9'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.
}



function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background(200) ;
    text("we have weather", 20, 20) ;
// parse the weather object and put some text or images using at least 3 different weather data!
text("the temperature is" + weather.main.temp, 20, 40);
      break;

  }
}
