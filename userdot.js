function userDot() {
	this.x = 550;
	this.y = 550;
	this.radius = 18;

	this.move = function() {
		ellipseMode(CENTER);
		fill(255, 0, 0);
		noStroke();
		ellipse(this.x, this.y, this.radius * 2, this.radius * 2);

	};
}