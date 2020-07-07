// Scroll down to see a sample solution.



















// Solutions are usually available for exercises and are
// there as a resource to you.



























/* global
 *    background,
 *    color,
 *    createCanvas,
 *    fill,
 *    height,
 *    image,
 *    loadImage,
 *    round,
 *    square,
 *    width,
 */

let dvdImage, masterVelocity, logoWidth, logoHeight, x, y, xVelocity, yVelocity

function setup(){
  createCanvas(800, 600);
  // Load the image once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");

  // --- Set up Controller Variables -- //
  // Adjust to change speed
  masterVelocity = 1;
  // Adjust the width of the logo
  logoWidth = 200;
  // Adjust the height of the logo
  logoHeight = 150;

  // Set up starting values.
  x = 50;
  y = 50;
  xVelocity = masterVelocity;
  yVelocity = masterVelocity;
}

function draw(){
  background(220);

  // Check to make sure the image isn't at or over the edge of the screen for
  // horizontal movement.
  if (x > width - logoWidth) {
    // If it's too far right, make velocity negative
    xVelocity = -1 * masterVelocity;
  } else if (x < 0) {
    // if it's too far left, make the velocity positive
    xVelocity = masterVelocity;
  }

  // Same check, but for vertical movement. Reverse it in either case.
  if (y > height - logoHeight) {
    yVelocity = -1 * masterVelocity;
  } else if (y < 0) {
    yVelocity = masterVelocity;
  }

  // Move the shape by changing the values of x and y
  x += xVelocity;
  y += yVelocity;

  // Draw the logo at the new position.
  image(dvdImage, x, y, logoWidth, logoHeight);
}