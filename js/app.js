// Entities in the game
var entities = [];

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 10; i ++) {
    entities.push(new Creature());
  }
}

function draw() {
  // Background
  fill(51);
  rect(0, 0, 800, 600);
  for (let i = 0; i < entities.length; i++) {
    entities[i].update();
    entities[i].draw();
  }
}
