var myState = 0;
var timer = 0; // declare in the global area


function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background('red');





  switch (myState) {
    case 0:
      text("How did Darth Vader know what Luke got him for christmas?", 100, 100);
      timer++;
      if (timer > 200) {
        myState = 1; // this will go to the next state.
        timer = 0; // reset the timer!!
      }
      break;

    case 1:
      text("He felt his presents", 100, 100);
      timer++;
      if (timer > 200) {
        myState = 0; // this will go to the next state.
        timer = 0; // reset the timer!!
        break;

      }
  }
}
