/* global
 *    background,
 *    createCanvas,
 *    image,
 *    loadImage, random, tint, color
 */

let DVD;
let dvds;

//Variables that can be altered
let scale = 5;
let xCan = 600;
let yCan = 600;
let count = 3;
let difficulty = 7;


let width = scale*20;
let height = scale*15;

let l = [1];

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
}


function draw(){
  // Code here runs continuously
  background(220);
  
  //Object-Oriented Spawning
  for(const d of dvds){
    //Updates x
    if(d.x>=xCan-width || d.x<=0){
      d.xDelt=-d.xDelt;
    }d.x+=d.xDelt;

    //Updates y
    if((d.y>=yCan-height && d.yDelt>0) || (d.y<=0 && d.yDelt<0)){
      d.yDelt=-d.yDelt;
      d.c = randCol(255,255,255);
    }d.y+=(d.yDelt*.5+d.yDelt*d.y*.015);
    
    tint(d.c);
    image(DVD, d.x, d.y, width, height);
  }
}

function randCol(red,green,blue) {
  return color(random(red), random(green), random(blue));
}