let fr = 60;
let y = 100;
let x = 100;

function setup() {
  createCanvas(800, 800);
  stroke(0)
  frameRate(fr);
  x = width;
  y = height;
}

function draw() {
  background(20,1,100, 3);
  angleMode(DEGREES/frameCount)
  y = y -1;
  if (y < 0) {
    y = height;
  }
  rotate(frameCount, y*y)
  line(0, y, width, y);


  y = y -40;
  if (y < 0) {
    y = height;
  }rotate(frameCount, x*x)
  line(0, y+50, width, y);

  y = y -16;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y+50);

  y = y -1;
  if (y < 0) {
    y = height;
  }
  line(0, y+50, width, y+50);

  y = frameCount/2;
  if (y < 0) {
    y = height;
  }
  line(0, y+150, width, y+100);

  y = y -1;
  if (y < 0) {
    y = height;
  }
  line(0, y+100, width, y+150);

  y = y -1;
  if (y < 0) {
    y = height;
  }
  line(0, y+150, width, y+150);

  
  line(frameCount/2, 0, x, frameCount*5);
  line(20, 0, x-50, frameCount);

  stroke(250);
  strokeWeight(6);

}

