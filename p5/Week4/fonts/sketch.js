var Spring ;

function preload() {
  Spring = loadFont("assets/Springfield.ttf") ;
}

function setup() {
  // put setup code here
createCanvas(800, 800) ;
}

function draw() {
  // put drawing code here
textFont(Spring, 28) ;
text("hello!", 100, 100) ;
}
