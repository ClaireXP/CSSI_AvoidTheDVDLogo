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
let xCan = 600;
let yCan = 600;

let x;
let y;
let xVel = 4;
let yVel;

let x1;
let y1;
let xVel1 = -8;
let yVel1;

let width = scale*20;
let height = scale*15;

let count = 3;
var color = ""


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
  yVel = random([-8,-5,-3,3,5,8]);
  yVel1 = random([-8,-5,-3,3,5,8]);
  xVel = random([-9,-6,-2,2,6,9]);
  xVel1 = random([-8,-5,-3,3,5,8]);
}


function draw() {
  // Code here runs continuously
  background(220);
  
  // Draw the logo at the new position.
  image(dvdImage, x, y, width, height);
  
  //Updates x
  if(x>=xCan-width || x<=0){
    xVel=-xVel;
  }x+=xVel;
    
  //Updates y
  if((y>=yCan-height && yVel>0) || (y<=0 && yVel<0)){
    yVel=-yVel;
    // tint(random(255), random(255), random(255));
  }y+=(yVel*.5+yVel*y*.0098);

  
  // Draw the 2nd logo at the new position.
  image(dvdImage1, x1, y1, width, height);
  
  //Updates x
  if(x1>=xCan-width || x1<=0){
    xVel1=-xVel1;
  }x1+=xVel1;
  
  //Updates y
  if((y1>=yCan-height && yVel1>0) || (y1<=0 && yVel1<0)){
    yVel1=-yVel1;
    // tint(random(255), random(255), random(255));
  }y1+=(yVel1*.5+yVel1*y1*.0098);
}