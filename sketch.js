


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1)

}


// Hour (Rect)
let hourSize = 30
let lastHour = -1

// Minutes (Circle size)
let minuteSize = 30
let lastMiniute = -1

// let bgNum = second()
// let bgColorR = bgNum
// let bgColorG = 255 - bgNum
// let bgColorB = random(bgNum)
seed(1)

 function draw() {

  let bgNum = second()
  let bgColorR = random(255 - bgNum)
  let bgColorG = random(255 - bgNum)
  let bgColorB = random(255 - bgNum)
  background(bgColorR,bgColorG,bgColorB)


  fill ("pink")
  let minuteNum = minute()
   ellipse(width/2, height/2, minuteSize, minuteSize)
   if (minuteNum !== lastMiniute){
      lastMiniute = minuteNum;
      minuteSize = 10*minuteNum
    }

    fill("orange");
    strokeWeight(0)
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
  fill("white")
  let s = hour() + ' : ' + minute() + ' : ' + second()
  textSize(30)
  text(s, 100, 100, 300, 70)

   




  //  ellipse(xPos,50,50,50);
  //  xPos = xPos +1;
  //  print(millis())
}
