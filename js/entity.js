/**
 * Entity superclass.
 */
class Entity {

  /** Constructor */
  constructor() {
    /** Position */
    this.pos = createVector(200, 200);
    /** Velocity */
    this.vel = createVector(0, 0);
    /** Acceleration */
    this.acc = createVector(0, 0);
    /** Size */
    this.size = createVector(10, 10);
  }

  /**
   * Draws the entity
   */
  draw() {
    fill(255);
    noStroke();
    rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
  }

  /**
   * Updates
   */
  update() {
    // Simple translational movement
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc = createVector(0, 0);
  }

}
