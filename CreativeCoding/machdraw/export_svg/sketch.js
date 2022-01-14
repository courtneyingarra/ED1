/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/
//translate (width/2, height/2);
//translate(((pW * 72) - 600)/2, ((pH * 72)- 600)/2);
// //
//   do{
//     rect(x + 11 , y + 8.5, x + 11, y + 8.5);
//     x = (x - 11, x + 8.5);  // x + random (5, 15)
//     y = (y - 11, y + 8.5);
//     }
//     while (y < 600);

// //
//translate(((pW * 72) - 600)/2, ((pH * 72)- 600)/2);

// translate(600,0);
// line (-600,600);
//for(var y = -300; y < 300; y = y + 40){
//for(var x = -300; x < 300; x = x + 40){

var pW = 13.75;
var pH = 10.625;
var x = 0;
var y = 0;

function setup() {
  createCanvas(pW * 72, pH * 72, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
}

function draw() {
let a = 0;
  let inc = (81/6); //(10 * PI)/50;
  for (let i = 0; i < pW * 72; i++) {
    line(i * 8 ,50, i * 8 ,50 + cos(a) * 25);
    a = a + inc;
  }
    for (i = 0; i < pW * 72; i++) {
      line(i * 8 ,100, i * 8 ,100 + cos(a) * 25);
      a = a + inc;
    }
    for (i = 0; i < pW * 72; i++) {
      line(i * 8 ,150, i * 8 ,150 + cos(a) * 25);
      a = a + inc;
    }
    for (i = 0; i < pW * 72; i++) {
      line(i * 8 ,200, i * 8 ,200 + cos(a) * 25);
      a = a + inc;
    }
    for (i = 0; i < pW * 72; i++) {
      line(i * 8 ,250, i * 8 ,250 + cos(a) * 25);
      a = a + inc;
    }
    for (i = 0; i < pW * 72; i++) {
      line(i * 8 ,300, i * 8 ,300 + cos(a) * 25);
      a = a + inc;
    }
    for (i = 0; i < pW * 72; i++) {
      line(i * 8 ,350, i * 8 ,350 + cos(a) * 25);
      a = a + inc;
    }
    for (i = 0; i < pW * 72; i++) {
      line(i * 8 ,400, i * 8 ,400 + cos(a) * 25);
      a = a + inc;
    }
    for (i = 0; i < pW * 72; i++) {
      line(i * 8 ,450, i * 8 ,450 + cos(a) * 25);
      a = a + inc;
    }
    for (i = 0; i < pW * 72; i++) {
      line(i * 8 ,500, i * 8 ,500 + cos(a) * 25);
      a = a + inc;
    }
    for (i = 0; i < pW * 72; i++) {
      line(i * 8 ,550, i * 8 ,550 + cos(a) * 25);
      a = a + inc;
    }
    for (i = 0; i < pW * 72; i++) {
      line(i * 8 ,600, i * 8 ,600 + cos(a) * 25);
      a = a + inc;
    }
// save("cingarra.svg"); // give file name
// print("saved svg");
noLoop(); // we just want to export once
}
