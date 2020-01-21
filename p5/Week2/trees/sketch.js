function setup() {
  // put setup code here
createCanvas(720, 400);
}


function draw() {
  // put drawing code here
  background('#1f52ed');
    noStroke();

    /*fill(204);
    triangle(18, 18, 18, 360, 81, 360);
    */

    fill('#1CB253');
    rect(0, 320, 800, 90);

    fill('#9C580F');
    rect(500, 220, 50, 400);

    fill('#416905');
    ellipse(500, 225, 72, 72);

    fill('#416905');
    ellipse(550, 225, 72, 72);

    fill('#416905');
    ellipse(600, 225, 72, 72);

    fill('#416905');
    ellipse(450, 225, 72, 72);

    fill('#416905');
    ellipse(475, 175, 72, 72);

    fill('#416905');
    ellipse(525, 175, 72, 72);

    fill('#416905');
    ellipse(575, 175, 72, 72);

    fill('#416905');
    ellipse(560, 125, 72, 72);

    fill('#416905');
    ellipse(500, 125, 72, 72);

    fill('#416905');
    ellipse(525, 75, 72, 72);

    fill('black');
    ellipse(525, 315, 25, 25);
    /*fill(204);
    quad(189, 18, 216, 18, 216, 360, 144, 360);
    */
    fill('yellow');
    ellipse(200, 144, 72, 72);

    //fill(204);
    //triangle(288, 18, 351, 360, 288, 360);

    fill('white');
    ellipse(400, 75, 72, 72);

    fill('white');
    ellipse(350, 75, 72, 72);

    fill('white');
    ellipse(300, 75, 72, 72);

    fill('white');
    ellipse(50, 240, 72, 72);

    fill('white');
    ellipse(100, 240, 72, 72);

    fill('white');
    ellipse(150, 240, 72, 72);
    // fill(255);
    //arc(479, 300, 280, 280, PI, TWO_PI);

    fill(0);
    textSize(30);
    text(mouseX + ", " + mouseY, 50, 50);
}
