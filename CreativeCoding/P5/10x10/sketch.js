function setup() {
  createCanvas(windowWidth, windowWidth);
  fill("yellow");
  strokeWeight(1);
}

function draw() {
 
var num = 10;
var sideLen = windowWidth/num;  

  for (var y = 0; y < windowWidth; y = y + sideLen)
{
  
  for (var x = 0; x < windowWidth; x = x + sideLen) 
{
  
  quad(x, y, 
      x + sideLen, y,
      x + sideLen, y + sideLen, 
      x, y + sideLen);
    
  }  
  } 
} 