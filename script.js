/* ____    ___       _      _       ____  
  / ___|  / _ \     / \    | |     / ___| 
 | |  _  | | | |   / _ \   | |     \___ \ 
 | |_| | | |_| |  / ___ \  | |___   ___) |
  \____|  \___/  /_/   \_\ |_____| |____/ 
                                               
1) Make the DVD logo move
2) Bounce
3) Move and bounce diagonally
4) Respond to canvas size

  ____    _____   ____    _____   _____    ____   _   _ 
 / ___|  |_   _| |  _ \  | ____| |_   _|  / ___| | | | |
 \___ \    | |   | |_) | |  _|     | |   | |     | |_| |
  ___) |   | |   |  _ <  | |___    | |   | |___  |  _  |
 |____/    |_|   |_| \_\ |_____|   |_|    \____| |_| |_|

4) Multiple logos
5) At different speeds
6) Change colors on bounce
7) Random colors and speeds!
8) Apply gravity to the logos and have that
   govern their y-direction movement.

*/


// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global
 *    background,
 *    createCanvas,
 *    image,
 *    loadImage, random, tint, color
 */

let dvdImage;
let dvdImage1;
let CAT_PIX;
let cats;

//Variables that can be altered
let scale = 5;
let xCan = 600;
let yCan = 600;
let count = 3;

let x;
let y;
let xVel;
let yVel;

let x1;
let y1;
let xVel1;
let yVel1;

let width = scale*20;
let height = scale*15;

let r,g,b;
let r1,g1,b1;

let l = [-8,-6,-5,-3,3,5,6,8];

function setup(){
  // Code here runs only once

  createCanvas(xCan, yCan);
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  dvdImage1 = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  CAT_PIX = loadImage("https://images.theconversation.com/files/301743/original/file-20191114-26207-lray93.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip");
  
  x = random(xCan-width);
  y = random(yCan-height);
  x1 = random(xCan-width);
  y1 = random(yCan-height);
  yVel = random(l);
  yVel1 = random(l);
  xVel = random(l);
  xVel1 = random(l);
  
  
  //Object-oriented attempt
  cats = [];
  for(let i=0; i<count; i++){
    cats.push({
      xPos: random(xCan-scale*20),
      yPos: random(yCan-scale*20),
      xDelt: random(l),
      yDelt: random(l),
      c: randCol(255,255,255),
    });
  }
}


function draw(){
  // Code here runs continuously
  background(220);
  
  // Draw the logo at the new position.
  tint(r,g,b);
  image(dvdImage, x, y, width, height);
  
  //Updates x
  if(x>=xCan-width || x<=0){
    xVel=-xVel;
  }x+=xVel;
    
  //Updates y
  if((y>=yCan-height && yVel>0) || (y<=0 && yVel<0)){
    yVel=-yVel;
    r = random(255);
    g = random(255);
    b = random(255);  
  }y+=(yVel*.5+yVel*y*.015);

  
  // Draw the 2nd logo at the new position.
  tint(r1,g1,b1);
  image(dvdImage1, x1, y1, width, height);
  
  //Updates x
  if(x1>=xCan-width || x1<=0){
    xVel1=-xVel1;
  }x1+=xVel1;
  
  //Updates y
  if((y1>=yCan-height && yVel1>0) || (y1<=0 && yVel1<0)){
    yVel1=-yVel1;
    r1 = random(255);
    g1 = random(255);
    b1 = random(255);
  }y1+=(yVel1*.5+yVel1*y1*.015);
  
  //Object-Oriented Spawning
  for(const cat of cats){
    //Updates x
    if(cat.xPos>=xCan-scale*20 || cat.xPos<=0){
      cat.xDelt=-cat.xDelt;
    }cat.xPos+=cat.xDelt;

    //Updates y
    if((cat.yPos>=yCan-scale*20 && cat.yDelt>0) || (cat.yPos<=0 && cat.yDelt<0)){
      cat.yDelt=-cat.yDelt;
      cat.c = randCol(255,255,255);
    }cat.yPos+=(cat.yDelt*.5+cat.yDelt*cat.yPos*.015);
    
    tint(cat.c);
    image(CAT_PIX, cat.xPos, cat.yPos, scale*20, scale*20);
  }
}

function randCol(red,green,blue) {
  return color(random(red), random(green), random(blue));
}