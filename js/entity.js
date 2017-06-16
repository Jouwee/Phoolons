/** Next entity ID */
var entityNextId = 0;

/**
 * Entity superclass.
 */
class Entity {

  /** Constructor */
  constructor() {
    /** Entity ID */
    this.id = entityNextId++;
    /** Position */
    this.pos = createVector(200, 200);
    /** Velocity */
    this.vel = createVector(0, 0);
    /** Acceleration */
    this.acc = createVector(0, 0);
    /** Size */
    this.size = createVector(10, 10);
    /** Color */
    this.color = color(255);
  }

  /**
   * Draws the entity
   */
  draw() {
    fill(this.color);
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

  /**
   * Test if two elements are touching or overlapping
   */
  inContactWith(another) {
    return dist(this.pos.x, this.pos.y, another.pos.x, another.pos.y) < 10;
  }

}
