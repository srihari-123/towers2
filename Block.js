class Block{

    constructor(x, y, width, height) {

        var options = {
           
            restitution :0.4,
            friction :0.0,
           
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
         this.visiblity =255;


      }

      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
      strokeWeight(6);
      stroke("green")
        if (this.body.speed<3) {
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0, this.width, this.height)
            pop ();
        } else {
            push ();
                World.remove(world,this.body);
                this.visiblity = this.visiblity-5
                tint(255,this.visiblity)
            pop();
            
        }
       
}
}