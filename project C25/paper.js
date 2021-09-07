class Paper{
    constructor(x,y,r){
        var options={
            density: 1.2,
            friction: 0.1,
            restitution: 0.1
        }
        this.body=Bodies.circle(x,y,r, options)
        this.rad=r
        World.add(world, this.body)
        this.image= loadImage("paper.png")
    }

    display(){
        var pos= this.body.position
        imageMode(CENTER)
        image(this.image, pos.x, pos.y , 2*this.rad, 2*this.rad)
    }
}