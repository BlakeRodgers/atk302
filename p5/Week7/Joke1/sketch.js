var myState = 0;


function preload(){

}

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background('red');
  switch(myState) {
    case 0:
    text("How did Darth Vader know what Luke got him for christmas?", 100, 100);
    break;

    case 1:
    text("He felt his presents", 100, 100);
    break;

  }
}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 1) {
    myState = 0;
  }
}
