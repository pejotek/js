var circleX = 0;
var circleY = 0;
function setup() {

	createCanvas (600, 600);
    background(125,250,55); 
}
function draw(){
    fill(255,111,250,100);
    noStroke();
	ellipse(circleX, circleY, 20, 20);
    circleX = circleX + 1;
    circleY = circleY + 1;
}

function mousePressed(){
    background(125,250,55); 
    circleX = mouseX;
    circleY = mouseY;
    
}
