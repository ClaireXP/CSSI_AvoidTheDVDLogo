/* global
 *    background,
 *    createCanvas,
 *    image,
 *    loadImage, random, tint, color, append, rect, keyIsDown, LEFT_ARROW, RIGHT_ARROW
 */

let DVD;
let dvds;
let players;

//Variables that can be altered
let scale = 5;
let xCan = 600;
let yCan = 600;
let count = 3;
let maxSpd = 6;
let pSpeed = 2;
let pCount = 1;


let pWidth = scale*10;
let width = scale*20;
let height = scale*15;

let l = [];

for(let i=maxSpd; i>maxSpd-3; i--){
  l.push(i);
  l.push(-i);
}

function setup(){
  // Code here runs only once

  createCanvas(xCan, yCan);
  // We only want to load the logo once.
  DVD = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  
  //Object-oriented setup
  dvds = [];
  for(let i=0; i<count; i++){
    dvds.push({
      x: random(xCan-width),
      y: random(yCan-height),
      xDelt: random(l),
      yDelt: random(l),
      c: randCol(255,255,255),
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


function draw(){
  // Code here runs continuously
  background(220);
  
  for(const p of players){
    if(keyIsDown(LEFT_ARROW) && p.x>5){
      p.x-=pSpeed*5;
    }if(keyIsDown(RIGHT_ARROW)){
      p.x+=pSpeed*5;
    }
    rect(p.x, p.y, pWidth, pWidth);
  }
  
  //Object-Oriented Spawning
  for(const d of dvds){
    //Updates x
    if(d.x>=xCan-width || d.x<=0){
      d.xDelt=-d.xDelt;
    }d.x+=d.xDelt;

    //Updates y
    if((d.y>=yCan-height && d.yDelt>0) || (d.y<=0 && d.yDelt<0)){
      if(d.y>=yCan-height){
        d.c = randCol(255,255,255);
      }
      d.yDelt=-d.yDelt;
    }d.y+=(d.yDelt*.5+d.yDelt*d.y*.016);
    
    tint(d.c);
    image(DVD, d.x, d.y, width, height);
  }
}

function randCol(red,green,blue) {
  return color(random(red), random(green), random(blue));
}