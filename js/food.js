/**
 * Food
 */
class Food extends Entity {

  /**
   * Creates a new food object
   */
  constructor() {
    super();
    this.pos = createVector(random(0, WORLD_SIZE.x), random(0, WORLD_SIZE.y));
    this.color = color(0, 255, 0);
  }

}
