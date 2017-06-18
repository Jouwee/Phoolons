/**
 * Perceptron
 */
class Perceptron {

  /**
   * Creates a new perceptron
   */
  constructor(weights, activationFunction) {
    this.weights = weights;
    this.activationFunction = activationFunction;
  }

  /**
   * Computes the input
   */
  compute(input) {
    let weightedInputs = [];
    for (let i in input) {
      weightedInputs.push(input[i] * this.weights[i]);
    }
    return this.activationFunction(weightedInputs);
  }

}
