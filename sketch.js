var paddle1, paddle2,ball,Edges, player1Score, player2Score; 

function setup() {
  createCanvas(400, 400);
  player1Score = 0
  player2Score = 0
  paddle2=createSprite(25,200,10,75);
  paddle1=createSprite(375,200,10,75);
  ball=createSprite(200,200,20,20);
  Edges = createEdgeSprites();
  
  
  
  
}

function draw() {
  background(255);
  fill("Black");
  text("Press Space to serve",150,170);
  text(player1Score,230,15);
  text( player2Score,170,15);
  textSize(20)
  
  text("Karthik",50,370);
  text("Dhruv",300,370);
  
    for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
  if(keyDown("O")){
    paddle1.y = paddle1.y -4
  }
    if(keyDown("L")){
     paddle1.y = paddle1.y +4;
     }
  if(keyDown("W")){
    paddle2.y = paddle2.y -4
  }
  if(keyDown("S")){
    paddle2.y = paddle2.y +4
  }
  if(keyDown("SPACE")){
    ball.velocityY = 4
    ball.velocityX = 4
  }
  if(ball.x < 0){
    player1Score = player1Score + 1;
    
  }
  if(ball.x > 400){
    player2Score = player2Score + 1;
    
  }
  ball.bounceOff(paddle1);
  ball.bounceOff(paddle2);
  ball.bounceOff(Edges[2]);
  ball.bounceOff(Edges[3]);
  paddle1.collide(Edges[2]);
  paddle1.collide(Edges[3]);
  paddle2.collide(Edges[2]);
  paddle2.collide(Edges[3]);
  
  ballReset();
  drawSprites();
}
function ballReset(){
  if(ball.x > 400 || ball.x < 0){
    ball.x = 200;
    ball.y = 200;
    ball.velocityY = 0;
    ball.velocityX= 0;
  }
  
}