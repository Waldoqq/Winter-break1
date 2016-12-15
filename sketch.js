var mover = {
  x : 100,
  y : 100,
  h : 100,
  w : 100,
  up : false,
  down : false,
  left : false,
  right : true
};
var temp = 1;
function setup() {
  createCanvas(600, 400); 
  background(0, 128, 255);
 }

function draw() {
 if (temp == -1)
    background(0, 111, 0);
  else
    background(0, 0, 0);
  stroke(255);
  strokeWeight(4);
  noFill();
  if (buttoncheck()){
    fill(255,0,200);
  }
  rectMode(CENTER);
  rect(mover.x, mover.y, mover.w, mover.h);
  if (mover.up)
    mover.y -=3;
  if (mover.down)
    mover.y +=3;
  if (mover.left)
    mover.x -=3;
  if (mover.right)
    mover.x +=3;
  if(mover.x > 500){
    mover.x -=3;
    mover.right = !mover.right;
    mover.down = !mover.down;
  }
  if (mover.y > 300){
    mover.y -=3;
    mover.down = !mover.down;
    mover.left = !mover.left;
  }
  if (mover.x < 100  && mover.left){
    mover.x +=3;
    mover.left = !mover.left;
    mover.up = !mover.up;
  }
  if (mover.y < 100 && mover.up){
    mover.y +=3;
    mover.right = !mover.right;
    mover.up = !mover.up;
  }
 }
function mousePressed()
{
  if (buttoncheck())
  temp = temp * -1;
  }
function buttoncheck()
{
  if (mouseX > mover.x - mover.w/2 && mouseX < mover.x + mover.w/2 && mouseY > mover.y - mover.h/2 && mouseY < mover.y + mover.h/2)
    return true;
  else
    return false;
}
