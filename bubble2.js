function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(255, 0, 100);

  this.display = function(r, g, b){
    stroke(255);
      strokeWeight(2);
      fill(this.col);
      ellipse(this.x, this.y, 24, 24);
      };

  this.move = function() {
      this.x = this.x + random(-2, 2);
      this.y = this.y + random(-2, 2);
      };

  this.moveaway = function() {
    this.x = this.x + random(-0.5, 0.5);
    this.y = this.y + random(-0.5, 0.5);
  };

  this.distance = function(x, y) {
    var d = dist(this.x, this.y, x, y);
    if (d < 24) {
      return true;
      }
    else
      return false;
  };
}