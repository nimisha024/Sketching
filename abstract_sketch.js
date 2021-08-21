// GLOBAL

const bgColor = "hotpink";
const shapeColor = "#fffffd"; //white
const strokeColor = "#191919"; //black

const shapeSize = 65;
const shapeGapX = shapeSize / 1.5;
const shapeGapY = shapeSize / 4;

function setup() {
    createCanvas(windowWidth, windowHeight);

    //Stop-motion animation effect
    frameRate(4);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// SPACE PLANT - CUSTOM MOLD 

class Plant {
    constructor(leafSize, leafCount, posX) {
        this.leafCount = leafCount;
        this.sizeA = leafSize;
        this.sizeB = this.sizeA * 1.5;
        this.sizeC = this.sizeA * 0.4;
        this.posX = posX;

    }

    spot() {

        //Spot for plant on the ground.
        const posY = height * 0.95;
        translate(this.posX, posY);
    }

    create() {
        push();
        this.spot();

        for (let i = 0; i < this.leafCount; i++) {
            translate(random(-shapeGapY, shapeGapY), -shapeGapY * 1);
            triangle(0, this.sizeA, this.sizeC, this.sizeB, this.sizeB, 0);

            //Translate EACH triangle the same amount

            push();
            translate(shapeGapX, shapeGapY);
            triangle(0, this.sizeA, this.sizeC * -1, this.sizeB, this.sizeB * -1, 0);
            pop();
        }
        pop();
    }
}

// UNIVERSE

const drawUniverse = () => {

    background(bgColor);
    //noFill();
    fill(shapeColor);
    //noStroke();
    stroke(strokeColor);
    strokeWeight(1);

    //Sketch moon
    const moon = shapeSize * 4;
    const moonGap = moon * 0.75;

    push();
    const moonPhases = 8;
    for (let i = 0; i < moonPhases; i++) {
        translate(random(-shapeGapY, shapeGapY), 5);
        circle(width - moonGap, moonGap, moon);

    }

    pop();

    //Sketch space plants
    /* Plant Class
    -leaf size
    -number of leaves
    -horizontal spot on the ground
    */

    const posCenterX = width * 0.5;
    const plantOne = new Plant(shapeSize, 16, posCenterX);
    plantOne.create();

    const shapeSizeM = shapeSize / 1.3;
    const posTwoX = posCenterX + shapeSize * 4;
    const plantTwo = new Plant(shapeSizeM, 10, posTwoX);
    plantTwo.create();

    const posThreeX = posCenterX - shapeSize * 6;
    const plantThree = new Plant(shapeSizeM, 26, posThreeX);
    plantThree.create();
    plantThree.create();

    const posFourX = posCenterX - shapeSize * 12;
    const plantFour = new Plant(shapeSize, 10, posFourX);
    plantFour.create();

    const posFiveX = posCenterX + shapeSize * 10;
    const plantFive = new Plant(shapeSize / 1.1, 5, posFiveX);
    plantFive.create();

};

function draw() {
    drawUniverse();
}

// Add more stars and galaxies on mouse over.

function mouseMoved() {
    noStroke();
    circle(mouseX, mouseY, random(3));
    circle(mouseX, mouseY, random(5));
}

// Stop/play the animation with a canvas click or mobile canvas touch.

let DRAWING = true;
const toggleDraw = () => {
    if (DRAWING) {
        noLoop();
        DRAWING = false;
        return;
    }

    loop();
    DRAWING = true;
};

function mousePressed() {
    toggleDraw();
}

function touchStarted() {
    toggleDraw();
}