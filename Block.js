class Block {
  constructor(x,y){
     var options= {
         isStatic:false
     }

      this.body=Bodies.rectangle(x,y,30,40,options);
     
      this.width=30;
      this.height=40
      World.add(world,this.body)
      this.Visibility=255;
  }
   
  display(){
      var pos= this.body.position;
      var angle= this.body.angle;
      
      if(this.body.speed<3){
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        fill("blue"); 
        rect(0,0,this.width,this.height);
        pop();
      }
      else{
        World.remove(world,this.body)
        push();
        this.Visibility=this.Visibility-5;
        pop();
      }
  }
}
