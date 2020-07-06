// Content behind double slashes is a comment.









// Scroll down to see a sample solution.









// Solutions are usually available for exercises and are
// there as a resource to you.



























/* global
 *    background,
 *    color,
 *    createCanvas,
 *    fill,
 *    image,
 *    loadImage,
 *    random,
 *    round,
 *    square,
 *    tint,
 */

const ASPECT_RATIO = 16 / 9;
const SCREEN_HEIGHT = 300;
const SCREEN_WIDTH = Math.round(SCREEN_HEIGHT * ASPECT_RATIO);

const LOGO_SIZE = 100;
let DVD_IMAGE;

const LOGO_COUNT = 5;

let logos;

function setup() {
  // Code here runs only once
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  background(0);

  DVD_IMAGE = loadImage(
      "https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  
  logos = [];
  
  for (let i = 0; i < LOGO_COUNT; i++) {
    logos.push({
      x: round(random(0, SCREEN_WIDTH - LOGO_SIZE)),
      y: round(random(0, SCREEN_HEIGHT - LOGO_SIZE)),
      xDelta: random([-5, -3, -1, 1, 3, 5]),
      yDelta: random([-5, -3, -1, 1, 3, 5]),
      color: randomColor(),
    })
  }
}

function draw() {
  // Code here runs continuously

  // move Logos
  for (const logo of logos) {
    logo.x = logo.x + logo.xDelta;
    if (logo.x < 0 && logo.xDelta < 0) {
      logo.xDelta = logo.xDelta * -1;
      logo.color = randomColor();
    } else if (logo.x + LOGO_SIZE > SCREEN_WIDTH && logo.xDelta > 0) {
      logo.xDelta = logo.xDelta * -1;
      logo.color = randomColor();
    }

    logo.y = logo.y + logo.yDelta;
    if (logo.y < 0 && logo.yDelta < 0) {
      logo.yDelta = logo.yDelta * -1;
      logo.color = randomColor();
    } else if (logo.y + LOGO_SIZE > SCREEN_HEIGHT && logo.yDelta > 0) {
      logo.yDelta = logo.yDelta * -1;
      logo.color = randomColor();
    }

    // draw Logo
    tint(logo.color);
    image(DVD_IMAGE, logo.x, logo.y, LOGO_SIZE, LOGO_SIZE);
  }
}

function randomColor() {
  return color(random(0, 256), random(0, 256), random(0, 256));
}