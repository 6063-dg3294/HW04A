function setup() {
  createCanvas(windowWidth, windowHeight);
  background("blue")
}



let xPos = 0
 function draw() {
   background(255);
   fill(0);
   rect(width / 2 - width / 40, height / 4 - width / 20, width / 20, height / 2 + width / 10);
   rect(width / 2.5, height / 4 + height / 2, width - 2 * width / 2.5, width / 20);
   rect(width / 2 - width / 20 - width / 40, height / 4 - width / 20, width / 20, width / 20);
   ellipse(xPos,50,50,50);
   xPos = xPos +1;
   print(millis())
}
