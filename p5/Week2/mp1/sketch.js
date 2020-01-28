function setup() {
  // put setup code here
  createCanvas (1000,800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here

  background(50);

  if (mouseIsPressed) {
      ellipse(50, 50, 50, 50);
    } else {
      rect(25, 25, 50, 50);
    }

ellipse(mouseX, mouseY, 100,100) ;
}
function mouseReleased () {
  console.log(mouseX + "," + mouseY) ;
}
