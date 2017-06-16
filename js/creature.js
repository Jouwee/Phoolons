/**
 * Creature
 */
class Creature extends Entity {

  /**
   * constructor
   */
  constructor(dna) {
    super();
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
    this.acc = createVector(this.dna.dnaString[0], this.dna.dnaString[1]);
  }

}
