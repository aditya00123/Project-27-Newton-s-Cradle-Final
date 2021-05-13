class Rope {
  constructor(bodyA, bodyB, offsetX, offsetY) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var options = {
      bodyA: bodyA,
      bodyB: bodyB,
      pointA:{x:this.offsetX, y:this.offsetY},
      length: 350,
      stiffness: 0.4,
    }
    this.rope = Matter.Constraint.create(options);

    World.add(world, this.rope);

  }

  display() {

    var pA = this.rope.bodyA.position;
    var pB = this.rope.bodyB.position;
    push();
    strokeWeight(4);
    fill('black');

    var Anchor1X = pA.x + this.offsetX;
    var Anchor1Y = pA.y + this.offsetY;

    var Anchor2X = pB.x;
    var Anchor2Y = pB.y;
    fill('black');
    console.log(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)
    line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    pop();
  }
}