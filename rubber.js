class rubber{
    constructor(){
        var options ={
            restituition:0.3,
            friction:5,
            density :1
        }
    this.body = Bodies.circle(500,500,30,options);
    this.width = 30;
    World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke("white");
    fill("green");
    ellipse(0, 0, this.width, this.height);
    pop();


    }
}