/* global
 *    background,
 *    createCanvas,
 *    image,
 *    loadImage, 
 *    random, tint, color, append, rect, keyIsDown, LEFT_ARROW, RIGHT_ARROW, colorMode, HSB, fill, noLoop, keyIsPressed, text, textSize
 *    keyCode, windowWidth, windowHeight, round, mouseX, mouseY, mouseIsPressed, mouseClicked
 */

let DVD;
let dvds;
let players;
let ready = false;

//Variables that can be altered
let xCan = window.innerWidth-15;
let yCan = window.innerHeight-20;
let count = 1 + Math.round(xCan/160);
let maxSpd = 4 + Math.round(yCan/350);
let maxLives = 3;

let lives = maxLives;
let score = 0;

let pSpeed = 2;
let pCount = 1;

let scale;

if(yCan>xCan){
  scale = xCan/125;
}else{
  scale = yCan/150;
}

let pWidth = scale*8;
let width = scale*20;
let height = scale*15;

let l = [];

for(let i=maxSpd; i>maxSpd-3; i-=.5){
  l.push(i);
  l.push(-i);
}

function setup(){
  // Code here runs only once

  createCanvas(xCan, yCan);
  // We only want to load the logo once.
  DVD = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  
  colorMode(HSB);
  fill(175,40,80);
}


function draw(){
  background(175, 5, 90);
  
  
  if(ready==true){
    //Updates player position
    for(const p of players){
      if((keyIsDown(LEFT_ARROW) || (mouseIsPressed && (mouseX<xCan/2))) && p.x>5){
        p.x-=pSpeed*5;
      }if((keyIsDown(RIGHT_ARROW) || (mouseIsPressed && (mouseX>xCan/2))) && p.x<xCan-pWidth-5){
        p.x+=pSpeed*5;
      }rect(p.x, p.y, pWidth, pWidth);

      //Updates logo positions
      for(const d of dvds){
        updateX(d);
        updateY(d);

        tint(d.c);
        image(DVD, d.x, d.y, width, height);

        //Checks for collision
        if(p.y<d.y+height){
          if((d.x<p.x && d.x+width>p.x) || (d.x<p.x+pWidth && d.x+width>p.x+pWidth)){
            ready = false;
            lives--;
          }
        }
      }
    }score++;
  }else{
    wait();
  }
  
  if(lives==0){
    textSize(yCan/20);
    text("Game Over",(xCan-160)/2,(yCan-20)/2);
    textSize(yCan/30);
    text("Score: " +score, 15,yCan/20);
    noLoop();
  }else{
    textSize(5+yCan/40);
    text("Lives: " +lives, 15,30);
    text("Score: " +score, yCan/6.5,30);
  }
}

  function randCol(h,s,b) {
    return color(random(h), random(s), random(b));
  }

  function updateX(o){
    //Updates x
    if(o.x>=xCan-width || o.x<=0){
      o.xDelt=-o.xDelt;
    }o.x+=o.xDelt;
  }

  function updateY(o){
    //Updates y with respects to current location --> Factors in "gravity"
    if((o.y>=yCan-height && o.yDelt>0) || (o.y<=0 && o.yDelt<0)){
      if(o.y>=yCan-height){
        o.c = randCol(255,255,255);
      }o.yDelt=-o.yDelt;
    }o.y+=(o.yDelt*.5+o.yDelt*o.y*.016);
  }

function wait(){
  textSize(yCan/30);
  if(lives==maxLives){
    text("Press any key or click to start",(xCan-(yCan/2.51))/2,(yCan-20)/2);
  }else{
    text("Press any key or click to continue",(xCan-(yCan/2.53))/2,(yCan-20)/2);
  }
  
  if((keyIsPressed && !(keyCode==LEFT_ARROW || keyCode==RIGHT_ARROW) || mouseIsPressed) && ready==false){
    ready=true;
    reset();
  }
}

function reset(){
  dvds = [];
  for(let i=0; i<count; i++){
    dvds.push({
      x: random(xCan-width),
      y: random(yCan/3-height),
      xDelt: random(l),
      yDelt: random(l),
      c: randCol(360,100,100),
    });
  }
  
  players = [];
  for(let i=0; i<pCount; i++){
    players.push({
      x: (xCan-pWidth)/2,
      y: yCan-pWidth-1,
      speed: pSpeed*10,
    });
  }
}