var myState = 0;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas (800,800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}



function draw() {
  // put drawing code here
fill ('yellow');
  rect(width/2, height/2, 150, 400);
fill ('black');
  ellipse (400, 275, 100, 100);
  fill('black');
  ellipse (400, 400, 100, 100);
  fill('black');
  ellipse (400, 525, 100, 100);
  switch(myState){


  case 0: //red light
  fill ('red');
    ellipse (400, 275, 100, 100);
    fill('black');
    ellipse (400, 400, 100, 100);
    fill('black');
    ellipse (400, 525, 100, 100);
  timer++;
  if (timer > 200) {
    myState = 1; // this will go to the next state.
    timer = 0;
  }
  break;


  case 1: //yellow light
  fill ('black');
    ellipse (400, 275, 100, 100);
    fill('yellow');
    ellipse (400, 400, 100, 100);
    fill('black');
    ellipse (400, 525, 100, 100);
  timer++;
  if (timer > 200) {
    myState = 2; // this will go to the next state.
    timer = 0;
  }
  break;


  case 2: // green light
  fill ('black');
    ellipse (400, 275, 100, 100);
    fill('black');
    ellipse (400, 400, 100, 100);
    fill('green');
    ellipse (400, 525, 100, 100);
  timer++;
  if (timer > 200) {
    myState = 1; // this will go to the next state.
    timer = 0;
  }
  break;

}
}
