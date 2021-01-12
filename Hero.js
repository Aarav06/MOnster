class Hero{
    constructor(x, y, width, height) {
        var options={
            density:1,
            frictionAir:1,
            isStatic:false
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage('Superhero-01.png');
        this.body = Bodies.rectangle(x,y,width,height, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        //ellipse(0,0, this.width, this.height);
        pop();
    }
}