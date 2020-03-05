var x = 0;
var myState = -1;
var timer = 0;




function setup() {
  // put setup code here
  createCanvas(720, 400);
}



function draw() {
  //if (mouseIsPressed) {
  push();
  translate(x, 0);
  carol();
  pop();

  x += 3;
  if (x > width) {
    x = -400;
  }
}

function carol() {
  noStroke()
  background('black');
  fill('#1CB253');
  rect(-1000, 320, 8000, 90);

  fill('tan');
  ellipse(400, 175, 300, 300);

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

  switch (myState) {

    case -1:
      textSize(24);
      //style.font = "italic bold 20px arial,serif";
      text("click to see carol", 50, 50);
      break;


    case 0:
      //this is where you put the case actions
      textSize(24);
      //style.font = "italic bold 20px arial,serif";
      text("This is Carol, she cannot blink and is very socially awkward", 50, 50);
      timer++;
      if (timer > 400) {
        myState = 1; // this will go to the next state.
        timer = 0;
      }
      break;

    case 1:
      textSize(20);
      text("But everything changes when she puts on the mask", 50, 50, 100);

      timer++;
      if (timer > 400) {
        myState = 2; // this will go to the next state.
        timer = 0; // reset the timer!!
        break;
      }

      case 2:
        fill('brown');
        rect(-1000, 320, 8000, 90);
        fill('blue');
        ellipse(400, 175, 300, 300);
        fill('red');
        triangle(400, 0, 375, 75, 420, 75);
        fill('orange');
        triangle(400, 15, 385, 75, 410, 75);
        fill('white');
        ellipse(320, 144, 72, 72);
        fill('white');
        ellipse(480, 144, 72, 72);
        fill('black');
        ellipse(480, 144, 65, 65);
        fill('black');
        ellipse(320, 144, 65, 65);
        fill('orange');
        triangle(400, 200, 390, 218, 415, 218);
        fill('orange');
        triangle(390, 218, 409, 236, 415, 218);
        fill('white');
        triangle(395, 216, 400, 206, 410, 216);
        fill('white');
        triangle(395, 216, 406, 232, 410, 216);
        timer++
        if (timer > 300) {
          myState = 3; // this will go to the next state.
          timer = 0; // reset the timer!!
        }
        break;

      case 3:
        fill('brown');
        rect(-1000, 320, 8000, 90);
        fill('blue');
        ellipse(400, 175, 300, 300);
        fill('red');
        triangle(400, 0, 375, 75, 420, 75);
        fill('orange');
        triangle(400, 15, 385, 75, 410, 75);
        fill('white');
        ellipse(320, 144, 72, 72);
        fill('white');
        ellipse(480, 144, 72, 72);
        fill('black');
        ellipse(480, 144, 65, 65);
        fill('black');
        ellipse(320, 144, 65, 65);
        fill('orange');
        triangle(400, 200, 390, 218, 415, 218);
        fill('orange');
        triangle(390, 218, 409, 236, 415, 218);
        fill('white');
        triangle(395, 216, 400, 206, 410, 216);
        fill('white');
        triangle(395, 216, 406, 232, 410, 216);

        fill('gray')
        rect(600, 100, 100, 100);
        fill('gray')
        rect(600, 100, 5, 170);
        fill('gray')
        rect(700, 100, 5, 170);
        fill('gray')
        rect(600, 400, 5, 100);
        if (timer > 400) {
          myState = 4; // this will go to the next state.
          timer = 0; // reset the timer!!
          break;
        }
        case 4:
          fill('brown');
          rect(-1000, 320, 8000, 90);
          fill('blue');
          ellipse(400, 175, 300, 300);
          fill('red');
          triangle(400, 0, 375, 75, 420, 75);
          fill('orange');
          triangle(400, 15, 385, 75, 410, 75);
          fill('white');
          ellipse(320, 144, 72, 72);
          fill('white');
          ellipse(480, 144, 72, 72);
          fill('black');
          ellipse(480, 144, 65, 65);
          fill('black');
          ellipse(320, 144, 65, 65);
          fill('orange');
          triangle(400, 200, 390, 218, 415, 218);
          fill('orange');
          triangle(390, 218, 409, 236, 415, 218);
          fill('white');
          triangle(395, 216, 400, 206, 410, 216);
          fill('white');
          triangle(395, 216, 406, 232, 410, 216);

          fill('gray')
          rect(600, 100, 100, 100);
          fill('gray')
          rect(600, 100, 5, 170);
          fill('gray')
          rect(700, 100, 5, 170);
          fill('gray')
          rect(600, 400, 5, 100);
          textSize(20);
          text("Welcome to Monday Night Raw", 50, 50, 100);
          timer++;
          if (timer > 400) {
            myState = 5; // this will go to the next state.
            timer = 0; // reset the timer!!
            break;
          }

          case 5:
            fill('brown');
            rect(-1000, 320, 8000, 90);
            fill('blue');
            ellipse(400, 175, 300, 300);
            fill('red');
            triangle(400, 0, 375, 75, 420, 75);
            fill('orange');
            triangle(400, 15, 385, 75, 410, 75);
            fill('white');
            ellipse(320, 144, 72, 72);
            fill('white');
            ellipse(480, 144, 72, 72);
            fill('black');
            ellipse(480, 144, 65, 65);
            fill('black');
            ellipse(320, 144, 65, 65);
            fill('orange');
            triangle(400, 200, 390, 218, 415, 218);
            fill('orange');
            triangle(390, 218, 409, 236, 415, 218);
            fill('white');
            triangle(395, 216, 400, 206, 410, 216);
            fill('white');
            triangle(395, 216, 406, 232, 410, 216);

            fill('gray')
            rect(600, 100, 100, 100);
            fill('gray')
            rect(600, 100, 5, 170);
            fill('gray')
            rect(700, 100, 5, 170);
            fill('gray')
            rect(600, 400, 5, 100);
            textSize(20);
            fill('white')
            rect(625, 150, 50, 100);
            fill('white')
            rect(620, 150, 5, 170);
            fill('white')
            rect(670, 150, 5, 170);
            fill('white')
            ellipse(650, 110, 75, 75);
            fill('white')
            rect(540, 150, 100, 5);
            fill('white')
            rect(670, 150, 100, 5);
            textSize(20);
            fill('red');
            text("   X     X", 605, 90, 100);
            fill('white');
            textSize(32);
            text("WWE Champion Carol", 100, 320, 800, 90);



            timer++;
            if (timer > 400) {
              myState = 5; // this will go to the next state.
              timer = 0; // reset the timer!!
              break;


            }
  }
}
function mouseReleased(){
  if(myState == -1){
    myState = 0;
  }

}
