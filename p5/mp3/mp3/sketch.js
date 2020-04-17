var cars = [];
var frogPos;
var myState = 0;
var maxCars = 10;
var maxTimer = 20*60;
var timer = maxTimer;
var mouth;
var roll;
var song1;


function preLoad(){
  song1 = loadSound('assets/music.mp3');
}

function setup() {
  // put setup code here
  createCanvas(800, 800);
//spawn cards
for (var i = 0; i < maxCars; i++) {
cars.push(new Car());

}


  frogPos = createVector(400, height - 100);

  textAlign(CENTER);
  imageMode(CENTER);
  mouth = loadImage('assets/mouth3.png');
  roll = loadImage('assets/roll2.png');
  audio = loadSound('assets/music.mp3');
}

function draw() {

  switch(myState){

case 0: //menu
background('red');
fill('white');
textSize(24);
text(" Welcome to my game! Click to proceed.", width/2, height/2);
break ;

case 1:
game(); // game state
timer = timer - 1;
if (timer <= 0){
  timer = maxTimer;
  myState = 3;
}
break ;

case 2: // win myState
background('blue');
text("YAY YOU WIN!!", width/2, height/2);
break ;

case 3: // lose
background('purple');
text("BETTER LUCK NEXT TIME LOSER!", width/2, height/2);
break ;

  }
}

function mouseReleased() {
switch(myState){
  case 0:
  myState = 1;
  break ;

  case 2:// win
  //spawn cars
  //reset maxTimer
  timer = maxTimer;
  cars = [] ;
  for (var i = 0; i < maxCars; i++) {
  cars.push(new Car());
  }

  myState = 0;
  break ;

  case 3:// lose
  //reset maxTimer
  timer = maxTimer;
  //spawn carss
  cars = [] ;
  for (var i = 0; i < maxCars; i++) {
  cars.push(new Car());
  }

  myState = 0;
  break ;
}
}



function game(){
// put drawing code here
    background('lightblue');

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50){
      cars.splice(i, 1);

    }
  }

if (cars.length == 0){
  myState = 2 ;
}

  //frog
  //fill('green');
  //ellipse(frogPos.x, frogPos.y, 50, 50);
  image(mouth, frogPos.x, frogPos.y);
   checkForKeys();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5 ;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5 ;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5 ;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5 ;
}



function Car() {
//attributes
this.pos = createVector(random(width), random(height));
this.vel = createVector(random(-5,5), random(-5,5));
this.r = random(255);
this.g = random(255);
this.b = random(255);
//methods
this.display = function() {
  //fill(this.r, this.g, this.b);
  //rect(this.pos.x, this.pos.y, 30, 30);
  image(roll, this.pos.x, this.pos.y, 50, 50);
}


this.drive = function() {
  this.pos.add(this.vel);
  if(this.pos.x > width) this.pos.x = 0;
  if(this.pos.x < 0) this.pos.x = width;
  if(this.pos.y > height) this.pos.y = 0;
  if(this.pos.y < 0) this.pos.y = height;

}

}
