// Entities in the game
var entities = [];

/** World size */
const WORLD_SIZE = new p5.Vector(800, 600);

let generations = [];
let simulationTick = 0;

let doAsap;

function setup() {
  createCanvas(800, 600);
  simulateGeneration(nextGeneration());
  doAsap = createCheckbox('ASAP', false);
}

function draw() {
  // Background
  fill(51);
  rect(0, 0, 800, 600);

  do {

    simulationTick++;
    for (let i = 0; i < entities.length; i++) {
      entities[i].update();
    }
    chance = map(simulationTick, 0, 4000, 0.1, 0);
    if (random(1) < chance) {
      entities.push(new Food());
    }

    var creatureCount = 0;
    for (let i in entities) {
      if (entities[i] instanceof Creature) {
        creatureCount++;
        break;
      }
    }
    if (creatureCount == 0) {
      simulateGeneration(nextGeneration());
      break;
    }

  } while(doAsap.checked());

  for (let i = 0; i < entities.length; i++) {
    entities[i].draw();
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
  simulationTick = 0;
  entities = entities.concat(gen.population);
  for (let i = 0; i < 80; i ++) {
    entities.push(new Food());
  }
}
