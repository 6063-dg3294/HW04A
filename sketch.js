


function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(1)

}


// Hour
let xPos = 0
let hourSize = 30
let lastHour = -1

 function draw() {
   background(255);
   fill(0);
   let hourNum = hour()

   let rectX = width/2 - hourSize/2
   let rectY = height/2 - hourSize/2
   rect(rectX, rectY, hourSize, hourSize);
   if (hourNum !== lastHour){
    if (hourNum !== 0){
      lastHour = hourNum;
      hourSize = 30*hourNum
    }
    else{
      hourSize = 30
    }
   }
  
   // Text
let t = 'dog'
let s = hour() + ' : ' + minute() + ' : ' + second()
textSize(30)
text(s, 100, 100, 300, 70)

   




  //  ellipse(xPos,50,50,50);
  //  xPos = xPos +1;
  //  print(millis())
}
