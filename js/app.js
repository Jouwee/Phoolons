// Entities in the game
var entities = [];

/** World size */
const WORLD_SIZE = new p5.Vector(800, 600);

let generations = [];

function setup() {
  createCanvas(800, 600);
  simulateGeneration(nextGeneration());
}

function draw() {
  // Background
  fill(51);
  rect(0, 0, 800, 600);
  for (let i = 0; i < entities.length; i++) {
    entities[i].update();
  }

  for (let i = 0; i < entities.length; i++) {
    entities[i].draw();
  }

  let creatureCount = 0;
  for (let i in entities) {
    if (entities[i] instanceof Creature) {
      creatureCount++;
      break;
    }
  }
  if (creatureCount == 0) {
    simulateGeneration(nextGeneration());
  }

}

function nextGeneration() {
  let gen = undefined;
  if (generations.length == 0) {
    gen = new Generation();
    for (let i = 0; i < 10; i ++) {
      let creature = new Creature();
      creature.pos = createVector(random(0, WORLD_SIZE.x), random(0, WORLD_SIZE.y));
      gen.population.push(creature);
    }
  } else {
    let lastGeneration = generations[generations.length - 1];
    gen = Generation.cross(lastGeneration);
  }
  console.log("Next generation", gen);
  generations.push(gen);
  return gen;
}

function simulateGeneration(gen) {
  entities = [];
  entities = entities.concat(gen.population);
  for (let i = 0; i < 80; i ++) {
    entities.push(new Food());
  }
}
