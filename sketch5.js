var bubbles = [];
var arcmis = [];

function preload() {
  arcmis[0] = loadImage('images/cropped1.jpg');
  arcmis[1] = loadImage('images/cropped2.png');
  arcmis[2] = loadImage('images/cropped3.png');
  arcmis[3] = loadImage('images/cropped4.png');
  arcmis[4] = loadImage('images/cropped5.png');
  arcmis[5] = loadImage('images/cropped6.png');
}

  function setup() {
    createCanvas(600, 400);
}

function draw() {
  background(222);
  for(var i = 0; i < bubbles.length; i++){
    bubbles[i].display();
    bubbles[i].move();
  }
}

function mousePressed() {
  var r = floor(random(6));
  var b = new Bubble(mouseX, mouseY, arcmis[r]);
  bubbles.push(b);
}
