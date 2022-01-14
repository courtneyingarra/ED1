let gif;

function preload (){
  gif = loadImage ('gif/teddybear.gif');
}

function setup() { //runs once
  createCanvas(windowWidth * 2, windowHeight * 2);
}

function draw() {

background (218, 255, 173);

translate (10,70)

var num = 16; //variable for the number of squares in the array
var sideLen = windowWidth/num;//variable for the side lenth of each square

  for (var y = 0; y < windowHeight * 2; y = y + sideLen) {//loop to create rows in the y direction
  for (var x = 0; x < windowWidth * 2; x = x + sideLen) {// loop to create a row of squares in the x direction0
image (gif, x, y);
  }
}
}

function windowResized() {
resizeCanvas(windowWidth * 2, windowHeight * 2);
}
