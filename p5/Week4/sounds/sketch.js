var song1;

function preload() {
  song1 = loadSound('assets/bells_bells_bells.mp3');
}

function setup() {
  // put setup code here
  createCanvas(720,200);
  background(255, 0, 0);
  song1.play();
}

function mouseReleased () {
  song1.pause();
  if (song1.isPlayeing()) {

  } else {
    song1.play();
  }
}

function draw() {
  // put drawing code here
}

function touchStarted() {
  getAudioContext().resume();
}