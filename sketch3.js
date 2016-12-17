var bubbles = [];
var temp = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(222);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display(0, random(255), random(255));
  }
}

function mousePressed() {
  temp = 0;
  for (var i = 0; i < bubbles.length; i++){
        bubbles[i].clicked();
      }
  if (temp == 0)
    bubbles.push(new Bubble(mouseX, mouseY));
  if (bubbles.length > 5){
    bubbles.splice(0, 1);
  }
}
