/** Size of the DNA string */
const DNA_SIZE = 3;

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

}
