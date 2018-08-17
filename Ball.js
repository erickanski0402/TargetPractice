class Ball{

    constructor(p, v, a, c){
        this.p = p; //The dots current (x,y) position on the board
        this.v = v; //The dots current (xv, yv) velocity vector on the board
        this.a = a; //The dots current (xva, yva) acceleration vector on the board
        this.c = (c)? c: "Black";
        this.r = 10;
    }

    moveBall(){
        this.v = this.v.add(this.a);   //The (x,y) velocity vector increases by the acceleration
        this.p = this.p.add(this.v);
    }

    changeDirection(){
        if(this.p.x+this.r > 500 || this.p.x-this.r < 0){
            this.v.x *= -1;
        }

        if(this.p.y+this.r > 500 || this.p.y-this.r < 0){
            this.v.y *= -3/4;
        }
    }

    draw(){
        fill(this.c);
        ellipse(this.p.x, this.p.y, this.r, this.r);
    }
}
