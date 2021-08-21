var cols, rows;
var w = 10;
var grid = [];


function setup() {
	createCanvas(400, 400);
	cols = floor(width / w);
	rows = floor(height / w);

	for (var j = 0; j < rows; j++) {
		grid.push([]);
		for (var i = 0; i < cols; i++) {
			var cell = new Cell(i, j);
			grid[j][i] = cell;
		}
	}
}

function mousePressed() {
	i=floor(mouseX/w);
	j=floor(mouseY/w);
	grid[j][i].changecolor();
	grid[j][i].counter++;
}

function draw() {
	background(51);

	for (var j = 0; j < rows; j++) {
		for (var i = 0; i < cols; i++) {
			grid[j][i].show();
		}
	}
}

function Cell(i, j) {
	this.i = i;
	this.j = j;
	this.clr = color(255, 100);
	this.counter=0;

	this.show = function () {
		var x = this.i * w;
		var y = this.j * w;
		stroke(255);
		if(this.counter==0){
			fill(this.clr);
		}
		else if(this.counter==1){
			fill("blue");
		}
		else if(this.counter==2){
            fill("green");
		}
		else{
			fill(this.clr);
		}
		rect(x, y, w, w);
		
	};

	this.changecolor = function () {
		this.clr = color("red");

	};
}
