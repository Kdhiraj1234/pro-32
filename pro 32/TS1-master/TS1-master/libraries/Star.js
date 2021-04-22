class starmaker {
    constructor(x,y,radius){
        var options = {
            isStatic : true,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        ellipse(this.x,this.y,this.radius,this.radius);
        ellipseMode(CENTER);
    }
}