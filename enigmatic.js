var cols, rows;
var squares = [], userSquares = [];
var setuptime = 0;
var userdot;
var pattern_num = 13;

function setup() {
    var x = 53, y = 53, size = 100;
    createCanvas(706, 706);
    background(96);
    cols = floor(width/size);
    rows = floor(height/size);
    userdot = new userDot();
    for( var j = 0; j < rows; j++ ) {
        for( var i = 0; i < cols; i++) {
            userSquares[i+j*cols] = new Square(x + size * i, y + size * j, size);
        }
    }
    userSquares[40].hide = true;
    userSquares[40].solution = true;
    userdot.move();
    setuptime = highlight(floor(random(pattern_num)));
    initialGrid(setuptime, cols, rows);
}


function draw() {
    setTimeout(function() {
        for(var i = 0; i < userSquares.length; i++){
                userSquares[i].displaySecond();
               // text(i, squares[i].x-10, squares[i].y); 
            }
    checkMovement();
    userdot.move();
    checkToHideWinOrLose();
     }, setuptime + rows * 100);
}

function checkMovement(){
    if (keyIsDown(LEFT_ARROW))
        userdot.x -= 5;

    if (keyIsDown(RIGHT_ARROW))
        userdot.x += 5;

    if (keyIsDown(UP_ARROW))
        userdot.y -= 5;

    if (keyIsDown(DOWN_ARROW))
        userdot.y += 5;
}

function checkToHideWinOrLose() {
    var win = true;
    for(var i = 0; i < userSquares.length; i++){
        if(userSquares[i].hide != userSquares[i].solution)
            win = false;
        if (userSquares[i].checkDistance(userdot.x, userdot.y, userdot.radius)){
            if(userSquares[i].hide != userSquares[i].solution)
                // you die
                background(255, 0, 0);
        }
    }
    if(win)
        // you win
        background(0, 255, 255);
}

function initialGrid(time, cols, rows){
    for(var j = rows-1; j >= 0; j--) {
        for(var i = cols-1; i >= 0; i--) {
            if (i+j*cols != 40){
                (function(x, y) {
                    setTimeout(function() { userSquares[x+y*cols].displaySecond(); 
                    }, time + (-j+rows)*100);})(i, j);
            }
        }
    }
}