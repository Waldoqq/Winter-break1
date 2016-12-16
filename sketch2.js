var bubbles = [];



function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 1000; i++){
  	 bubbles[i] = {
 	 x: 300,
  	 y: 200,
 	 display: function() {
	    stroke(100);
	    strokeWeight(2);
	    fill(0, random(255), random(255));
	    ellipse(this.x, this.y, 24, 24);
	  	},
  	move: function() {
   	 	this.x = this.x + random(-5, 5);
    	this.y = this.y + random(-5, 5);
  		}
	}
  }
}

function draw() {
  background(222);
  for (var i = 0; i < bubbles.length; i++) {
  	bubbles[i].move();
  	bubbles[i].display();
	}
}