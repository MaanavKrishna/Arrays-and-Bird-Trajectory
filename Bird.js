class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.birdpath=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var position=[this.body.position.x,this.body.position.y];
    this.birdpath.push(position);
    console.log(this.birdpath);
    for(var i = 0; i < this.birdpath.length; i++){
      image(this.smokeimage,this.birdpath[i][0],this.birdpath[i][1]);
    }
  }
}
