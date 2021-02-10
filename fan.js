class fan{
    constructor(){
var options={ isStatic:true }
this.body=Bodies.circle(20,20,10,options);
World.add(world,this.body);
    }

    display()
    {  
        ellipse (this.body.position.x,this.body.position.y, 10,10);
                                                                   
    }
}