function Square(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.hide = false;
    this.solution = false

    this.displayFirst = function(){
        rectMode(CENTER);
        strokeWeight(6);
        stroke(153, 153, 0);
        fill(255, 255, 102);
        rect(this.x, this.y, this.size, this.size);
        this.solution = true;
    };

    this.displaySecond = function(){
        rectMode(CENTER);
        strokeWeight(6);
        if (this.hide === true) {
            stroke(96);
            fill(96);
            rect(this.x, this.y, this.size-12, this.size-12);
        }
        else {
            stroke(153, 153, 0);
            fill(255, 255, 102);
            rect(this.x, this.y, this.size, this.size);
        }
    };    


    this.checkDistance = function(x, y, r) {
        var d = dist(this.x, this.y, x, y);
        if (d < r +this.size/2){
            this.hide = true;
            return true;
        }
        else
            return false;
    };
}