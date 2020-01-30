function setup() {
  // put setup code here
createCanvas(720, 400);
}


function draw() {
  if (mouseIsPressed) {
    noStroke()
    background('black');
    fill('#1CB253');
    rect(0, 320, 800, 90);

   fill('tan');
    ellipse (400, 175, 300, 300);
    /*fill(204);
    quad(189, 18, 216, 18, 216, 360, 144, 360);
    */
    fill('white');
    ellipse(320, 144, 72, 72);

    fill('white');
    ellipse(480, 144, 72, 72);

    fill('black');
    ellipse(480, 144, 65, 65);

    fill('black');
    ellipse(320, 144, 65, 65);

    fill('red');
    triangle(400, 0, 375, 75, 420, 75);

    fill('orange');
    triangle(400, 15, 385, 75, 410, 75);

    fill('tan');
    ellipse(325, 325, 45, 45);

    fill('tan');
    ellipse(475, 325, 45, 45);

    fill('tan');
    ellipse(595, 100, 150, 36);

    fill('tan');
    ellipse(590, 120, 125, 36);

    fill('tan');
    ellipse(585, 140, 95, 36);

    fill('tan');
    ellipse(215, 140, 95, 36);

    fill('tan');
    ellipse(215, 120, 125, 36);

    fill('tan');
    ellipse(215, 100, 150, 36);

    fill('orange');
    triangle(400, 200, 390, 218, 415, 218);

    fill('orange');
    triangle(390, 218, 409, 236, 415, 218);

    fill('white');
    triangle(395, 216, 400, 206, 410, 216);

    fill('white');
    triangle(395, 216, 406, 232, 410, 216);





}



 else {
  noStroke()
  background('#1f52ed');
    noStroke();

    /*fill(204);
    triangle(18, 18, 18, 360, 81, 360);
    */

    fill('#1CB253');
    rect(0, 320, 800, 90);

   fill('tan');
    ellipse (400, 175, 300, 300);
    /*fill(204);
    quad(189, 18, 216, 18, 216, 360, 144, 360);
    */
    fill('white');
    ellipse(320, 144, 72, 72);

    fill('white');
    ellipse(480, 144, 72, 72);

    fill('black');
    ellipse(500, 150, 36, 36);

    fill('black');
    ellipse(300, 150, 36, 36);

    fill('red');
    triangle(400, 0, 375, 75, 420, 75);

    fill('orange');
    triangle(400, 15, 385, 75, 410, 75);

    fill('tan');
    ellipse(325, 325, 45, 45);

    fill('tan');
    ellipse(475, 325, 45, 45);

    fill('tan');
    ellipse(595, 100, 150, 36);

    fill('tan');
    ellipse(590, 120, 125, 36);

    fill('tan');
    ellipse(585, 140, 95, 36);

    fill('tan');
    ellipse(215, 140, 95, 36);

    fill('tan');
    ellipse(215, 120, 125, 36);

    fill('tan');
    ellipse(215, 100, 150, 36);

    fill('orange');
    triangle(400, 200, 390, 218, 415, 218);

}







    //fill('yellow');
    //ellipse(200, 144, 72, 72);

    //fill(204);
    //triangle(288, 18, 351, 360, 288, 360);


    // fill(255);
    //arc(479, 300, 280, 280, PI, TWO_PI);

    fill(0);
    textSize(30);
    text(mouseX + ", " + mouseY, 50, 50);

    function mouseReleased() {
      console.log(mouseX +", "+ mouseY);

    }
}
