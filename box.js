class box
{
	constructor(x,y,w,h)
	{
		var options={
			restitution	:0.8,
            densitiy:	0.04,
            friction :1.0
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("red")
			rect(0,0,this.w, this.h);
			pop()
			
	}

}