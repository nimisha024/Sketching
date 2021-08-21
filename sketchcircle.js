var circles=[];

function setup(){
    createCanvas(500,500);    
}

function draw(){
    background(20);
    nostroke();
}    

function mousePressed(){ 

    for(var i=0;i<50;i++){ 
        var circle={
            x: mouseX,
            y: mouseY,
            r:15
        };
    
        var overlapping =false;
        for(var j=0;j<circles.length;j++){
            var other=circles[j];
            var d=dist(circle.x,circle.y,other.x,other.y);
            if (d<circle.r + other.r){
                overlapping=true;
                break;
            }
        }

        if(!overlapping){
        circles.push(circle);
        }
    }    
    for(var i=0;i<circles.length;i++){ 
        fill("white");
        ellipse(circles[i].x,circles[i].y,circles[i].r*2,circles[i].r*2);  
    }
     
} 