/**
 * Generation
 */
class Generation {

  /**
   * Creates a new generation
   */
  constructor() {
    this.population = [];
  }

  /**
   * Creates a new generation based on the crossing of individuals of another
   */
  static cross(generation) {
    let newGeneration = new Generation();
    let pool = generation.buildPool();
    for (let i = 0; i < generation.population.length; i ++) {
      let parent1 = pool[floor(random(pool.length))];
      let parent2 = pool[floor(random(pool.length))];
      let creature = new Creature(parent1.dna.cross(parent2.dna));
      creature.pos = createVector(random(0, WORLD_SIZE.x), random(0, WORLD_SIZE.y));
      newGeneration.population.push(creature);
    }
    return newGeneration;
  }

  /**
   * Creates the selection pool
   */
  buildPool() {
    let fitness = this.computeFitness();
    let pool = [];
    for (let i in this.population) {
      for (let j = 0; j < 100 * fitness[i]; j++) {
        pool.push(this.population[i]);
      }
    }
    return pool;
  }

  /**
   * Returns the fitness for every population member
   */
  computeFitness() {
    let fitnessArray = [];
    let maxFitness = 0;
    let avgFitness = 0;
    let minFitness = Infinity;
    for (let i in this.population) {
      let fitness = this.population[i].internalClock;
      maxFitness = Math.max(maxFitness, fitness);
      minFitness = Math.min(minFitness, fitness);
      avgFitness += fitness;
      fitnessArray.push(fitness);
    }
    avgFitness = avgFitness / this.population.length;
    console.log("Max fitness: " + maxFitness);
    console.log("Min fitness: " + minFitness);
    console.log("Avg fitness: " + avgFitness);
    for (let i in fitnessArray) {
      fitnessArray[i] = map(fitnessArray[i], minFitness, maxFitness, 0, 1);
    }
    return fitnessArray;
  }

}
