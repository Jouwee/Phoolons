/** Size of the DNA string */
const DNA_SIZE = 4;

/**
 * DNA
 */
class Dna {

  /**
   * Creates a new DNA
   */
  constructor(dnaString) {
    if (dnaString === undefined) {
      this.dnaString = [];
    } else {
      this.dnaString = dnaString;
    }
  }

  /**
   * Creates a new random DNA string
   */
  static random() {
    let dnaString = [];
    for (let i = 0; i < DNA_SIZE; i++) {
      dnaString.push(random(-1, 1));
    }
    return new Dna(dnaString);
  }

  /**
   * Crosses two DNA strings
   */
  cross(other) {
    let cut = floor(random(this.dnaString.length));
    let newDna = this.dnaString.slice(0, cut).concat(other.dnaString.slice(cut));
    return new Dna(newDna);
  }

}
