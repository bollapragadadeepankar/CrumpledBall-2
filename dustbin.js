class Dustbin {
    constructor (x, y, width, height){
        var options = { 
            isStatic: true,
            'restitution':0,
            'friction':1,
            'density':1.0

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/dustbingreen.png");
        World.add(world, this.body);


    }

    display(){
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x, this.body.position.y, this.width, this. height);

    }
    addimage(){
        var pos=this.body.position
        push ();
        imageMode (CENTER);
        image(this.image,610,610,this.width,this.height);
        pop ();
    }
}