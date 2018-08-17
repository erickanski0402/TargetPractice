var balls = [];
let maxBalls = 10;

function setup(){
    createCanvas(500,500);
    for(let i = 0; i < maxBalls; i++){
        balls.push(new Ball(new p5.Vector(250,250), new p5.Vector(Math.random()*2-1,Math.random()*2-1), new p5.Vector(0, .1)));
    }
}

function draw(){
    background(128);
    fill(0, 0, 0);

    for(let i = 0; i < maxBalls; i++){
        if(checkForWallCollisions(balls[i])){
            balls[i].changeDirection();
        }
        balls[i].moveBall();
        balls[i].draw();
    }
}

function checkForWallCollisions(ball){
    // console.log("X Pos: " + ball.p.x + " Y Pos: " + ball.p.y + " X Vel: " + ball.v.x + " Y Vel: " + ball.v.y);
    if(ball.p.x > width || ball.p.y > height || ball.p.x < 0 || ball.p.y < 0){
        console.log(ball, "\nBroke bounds");
    }
    if(ball.p.x > 500 || ball.p.x < 0){
        return true;
    }

    if(ball.p.y > 500 || ball.p.y < 0){
        return true;
    }

    return false;
}
