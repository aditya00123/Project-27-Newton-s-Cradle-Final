class Bob {
    constructor(x, y) {

        this.x = x;
        this.y = y;


        var options = {
            // isStatic : false,
            restitution: 0.6,
            friction: 0.4,
            density: 0.3,
        }

        this.radius = 40;
        console.log(x, y, 40, options)
        this.body = Bodies.circle(x, y, 40, options);

        World.add(world, this.body);

    }

    display() {
        push();
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill('fuchsia');
        stroke(0);
        ellipse(pos.x, pos.y, 80, 80);
        pop()


    }
}