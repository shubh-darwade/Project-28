class mango
{
    constructor(x,y,radius)
    {
        this.r=radius;
        this.body=Bodies.circle(x,y,this.r,{isStatic:true,restitution:0,friction:0,});
        this.image=loadImage("images/mango.png")
        World.add(world,this.body);
    }
      display()
      {
        var mpos=this.body.position;
          push();
          translate(this.body.position.x,this.body.position.y)
         imageMode(CENTER);
         image(this.image,0,0,this.r*2,this.r*2);
           pop();
      }
}