var bubbles = [];
  function setup() {
  createCanvas(600, 400);
  for (var i = 0; i< 200; i++){
    bubbles[i] = new Bubble(random(width), random(height));
  }
}

function draw() {
  background(222);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display(0, 255, 255);
    for (var j = i+1; j < bubbles.length; j++) {
      if(i !=j && bubbles[i].distance(bubbles[j].x, bubbles[j].y)){
          bubbles[i].moveaway();
          j--;
        }
      } 
    } 
}

