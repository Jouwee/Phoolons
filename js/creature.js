/**
 * Creature
 */
class Creature extends Entity {

  /**
   * constructor
   */
  constructor(dna) {
    super();
    this.internalClock = 0;
    this.life = 1;
    if (dna === undefined) {
      dna = Dna.random();
    }
    this.dna = dna;
  }

  /**
   * Updates the creature
   */
  update() {
    super.update();
    this.internalClock++;
    this.life -= 0.005;
    if (this.life <= 0) {
      for (var i in entities) {
        if (entities[i].id == this.id) {
            entities.splice(i, 1);
            break;
        }
      }
    }

    let closestFood = undefined;
    let closestFoodDist = 0;
    for (let i = entities.length - 1; i >= 0; i--) {
      if (entities[i] instanceof Food) {
        if (this.inContactWith(entities[i])) {
          entities.splice(i, 1);
          this.life += 0.2;
          if (this.life > 1) {
            this.life = 1;
          }
          continue;
        }
      }
    }
    for (let i in entities) {
      if (entities[i] instanceof Food) {
        let d = dist(entities[i].pos.x, entities[i].pos.y, this.pos.x, this.pos.y);
        if (closestFood === undefined || d < closestFoodDist) {
          closestFood = entities[i];
          closestFoodDist = d;
        }
      }
    }
    if (closestFood !== undefined) {
      let x = closestFood.pos.x - this.pos.x;
      let y = closestFood.pos.y - this.pos.y;

      let perceptronX = new Perceptron([this.dna.dnaString[0], this.dna.dnaString[1]], function(input) {
        let desired = createVector(input[0], input[1]);
        desired.limit(0.2);
        return(desired.x);
      });
      let perceptronY = new Perceptron([this.dna.dnaString[2], this.dna.dnaString[3]], function(input) {
        let desired = createVector(input[0], input[1]);
        desired.limit(0.2);
        return(desired.y);
      });
      this.acc = createVector(perceptronX.compute([x, y]), perceptronY.compute([x, y]));

      /*
      let desired = p5.Vector.sub(closestFood.pos, this.pos);
      desired.setMag(this.dna.dnaString[0] * 5);
      let steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.dna.dnaString[1] * 0.2);
      this.acc = steer;
      */
    }
    this.color = lerpColor(color(255, 0, 0), color(0, 255, 0), this.life);
  }

}
