function Bubble(x, y, img) {
  this.x = x;
  this.y = y;
  this.img = img;

  this.display = function(){
      imageMode(CENTER);
      image(img, this.x, this.y);
      //ellipse(this.x, this.y, 24, 24);
      };

  this.move = function() {
      this.x = this.x + random(-2, 2);
      this.y = this.y + random(-2, 2);
      };
}