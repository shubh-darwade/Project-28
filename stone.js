class stone
{
    constructor(x,y,radius)
    {
        this.r=radius;
        this.body=Bodies.circle(x,y,this.r,{isStatic:false,restitution:0,friction:0,});
        this.image=loadImage("images/stone.png")
        World.add(world,this.body);
    }
      display()
      {
          var spos=this.body.position;
         imageMode(CENTER);
         image(this.image,spos.x,spos.y,this.r*2,this.r*2);

      }
}