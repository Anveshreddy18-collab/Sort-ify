canvas = document.getElementById('canvas1');
ctx = canvas.getContext('2d');

function kochCurve(p1, p2, depth){
    // base case if depth = 0 -> draw line from p1 to p2
    // recursive case - find the rest of the points and make recursive calls w/ depth - 1
    if (depth == 0){
        // draw line
        drawLine(p1, p2);
        return
    }
    else{
        let [x1, y1] = p1, [x2, y2] = p2;

        let distance = x2 - x1;
        let distToMove = distance/3;
        
        //move turtle first increment
        let p3 = [x1 + distToMove, y1];
        ctx.moveTo(p3[0], p3[1]);
    
        //second increment
        // ctx.rotate(60);
        let p4 = [x1 + (distToMove * 2), y1 - 200];
        
        //third increment
        // ctx.rotate(-120);
        let p5 = [x1 + (distToMove * 3), y1];
        
        //recursive calls
        kochCurve(p1, p3, depth - 1);
        kochCurve(p3, p4, depth - 1);
        kochCurve(p4, p5, depth - 1);
        kochCurve(p5, p2, depth - 1);

        
    }
}

function tree(p1, p2, depth){
    // base case if depth = 0 -> draw line from p1 to p2
    // draw(from p1 to p3)
    // recursive case - find the rest of the points and make recursive calls w/ depth - 1
    if (depth == 0){
        // draw line
    }
}

function sierpTriangle(p1, p2, p3, depth){
    // base case if depth = 0 -> draw triangle with p1, p2, p3
    // recursive case - get 3 mid points and make recursive calls w/ depth - 1
    if (depth == 0){
        // draw triangle
    }
}

function sierpCarpet(p1, length, depth){
    // base case if depth = 0 -> draw rectangle with p1 and l/w = length
    // recursive case - find bottom left of all 8 smaller rects and make recursive calls on each w/ depth -1 
    if (depth == 0){
        // draw rectangle/square
    }
}

function drawLine(p1, p2){
    let [x1, y1] = p1;
    let [x2, y2] = p2;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

}

window.addEventListener('load', () => {
    kochCurve([100, 400], [900, 400], 1);  
})