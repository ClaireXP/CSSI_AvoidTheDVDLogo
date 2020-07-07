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
 *    loadImage, random, tint
 */

let dvdImage;
let dvdImage1;

//Variables that can be altered
let scale = 5;
let xCan = 800;
let yCan = 400;

let x;
let y;
let xVel = 4;
let yVel = -4;
let accel = 0;

let x1;
let y1;
let xVel1 = 2;
let yVel1 = 3;
let accel1 = 0;

let width = scale*20;
let height = scale*15;

let count = 3;


function setup() {
  // Code here runs only once

  createCanvas(xCan, yCan);
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  dvdImage1 = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  x = random(xCan-width);
  y = random(yCan-height);
  x1 = random(xCan-width);
  y1 = random(yCan-height);
}


function draw() {
  // Code here runs continuously
  background(220);
  
  // Draw the logo at the new position.
  image(dvdImage, x, y, width, height);
  
  //Updates x
  if(x>=xCan-width && xVel>0|| x<=0){
    xVel=-xVel;
  }x+=xVel;
    
  //Updates y
  if(y>=yCan-height || y<=0){
    yVel=-yVel;
    // tint(random(255), random(255), random(255));
  }
  
  if(yVel1>0){
    y+=yVel+yVel*y*.00098;
  }else{
    y+=yVel-yVel*y*.00098;
  }
  
  
  // Draw the 2nd logo at the new position.
  image(dvdImage1, x1, y1, width, height);
  
  //Updates x
  if(x1>=xCan-width || x1<=0){
    xVel1=-xVel1;
  }x1+=xVel1;
  
  //Updates y
  if(y1>=yCan-height || y1<=0){
    yVel1=-yVel1;
    // tint(random(255), random(255), random(255));
  }
  
  if(yVel1>0){
    y1+=yVel1+yVel1*y1*.00098;
  }else{
    y1+=yVel1-yVel1*y1*.00098;
  }
}