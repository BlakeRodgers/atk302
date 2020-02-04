var Baggage ;
var Lobby ;
var Waiting ;


function setup() {
  // put setup code here
createCanvas(800, 800) ;

Baggage = loadImage("assets/BaggageClaim.jpg") ;
Lobby = loadImage("assets/Lobby.jpg") ;
Waiting = loadImage("assets/WaitingRoom.jpg") ;

}

function draw() {
  // put drawing code here
image(Baggage, 0, 0, 200, 200) ;
image(Lobby, 0, 200, 200, 200) ;
image(Waiting, 0, 400, 200, 200) ;
}
