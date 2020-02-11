var x = 0 ;
function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background('red');
  //rect(x, 100, 100, 100);
fill('black');
textSize(72);

  text("Parasite", x, 100)
  x = x + 3;
  if (x > width) {
    x = 0 ;
  }
}
