
var P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11;
var O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11;
var groundImg, ballImg, ball, now, time;


function preload()
{
  groundImg = loadImage("ground final.jpg");
  ballImg = loadImage("football.png");
}

function setup() 
{
  createCanvas(1500, displayHeight);
  
  time = 0;
  // making players for team 'A' computerised
  //creating attackers
  P1 = createSprite(640, 130, 50, 50);
  P1.shapeColor = "black";
  P2 = createSprite(660, 260, 50, 50);
  P2.shapeColor = "red";
  P3 = createSprite(640, 490, 50, 50);
  P3.shapeColor = "red";
  P4 = createSprite(660, 640, 50, 50);
  P4.shapeColor = "red";
  //creating midfielders
  P5 = createSprite(520, 340, 50, 50);
  P5.shapeColor = "red";
  P6 = createSprite(520, 470, 50, 50);
  P6.shapeColor = "red";
  //creating defenders
  P7 = createSprite(360, 150, 50, 50);
  P7.shapeColor = "red";
  P8 = createSprite(360, 280, 50, 50);
  P8.shapeColor = "red";
  P9 = createSprite(360, 480, 50, 50);
  P9.shapeColor = "red";
  P10 = createSprite(360, 620, 50, 50);
  P10.shapeColor = "red";
  //creating GK
  P11 = createSprite(120, 385, 50, 50);
  P11.shapeColor = "yellow";
  //making players for team 'B' personified
  //creating attackers
  O1 = createSprite(830, 255, 50, 50);
  O1.shapeColor = "blue";
  O2 = createSprite(810, 380, 50, 50);
  O2.shapeColor = "blue";
  //creating midfielders
  O3 = createSprite(1000, 225, 50, 50);
  O3.shapeColor = "blue";
  O4 = createSprite(1000, 400, 50, 50);
  O4.shapeColor = "blue";
  O5 = createSprite(1000, 550, 50, 50);
  O5.shapeColor = "blue";
  //creating defenders
  O6 = createSprite(1170, 85, 50, 50);
  O6.shapeColor = "blue";
  O7 = createSprite(1130, 215, 50, 50);
  O7.shapeColor = "blue";
  O8 = createSprite(1150, 345, 50, 50);
  O8.shapeColor = "blue";
  O9 = createSprite(1150, 475, 50, 50);
  O9.shapeColor = "blue";
  O10 = createSprite(1170, 650, 50, 50);
  O10.shapeColor = "blue";
  //creating GK
  O11 = createSprite(1400, 385, 50, 50);
  O11.shapeColor = "red";


  ball = createSprite(750, displayHeight/2, 20, 20);
  ball.addImage("ball", ballImg);
  ball.scale = 0.04;

  O2.density = ball.density;
  ball.density = ball.density + 50;


  edge1 = createSprite(1500, displayHeight/2, 20,displayHeight);
  edge1.visible = false;
  edge2 = createSprite(0, displayHeight/2, 20,displayHeight);
  edge2.visible = false;
  edge3 = createSprite(750, 0, 1500, 20);
  edge3.visible = false;
  edge4 = createSprite(750, displayHeight, 1500, 20);
  edge4.visible = false;


}

function draw() 
{
  background(groundImg); 

 time = frameCount/100
 

  textSize(30)
  fill("black")
  text ("Time Elapsed : " + time,50,50);
  

  //giving control to player O1 Attacker
    if (keyDown("A"))
    {
    if(keyDown("up"))
    {
       O1.y = O1.y - 3;
    }
    
    if (keyDown("down"))
    {
      O1.y = O1.y + 3;
    }
  
    if (keyDown("left"))
    {
      O1.x = O1.x - 3;
    }
  
    if (keyDown("right"))
    {
      O1.x = O1.x + 3;
    }
    //giving motion to other players when A in control
    //O2.velocityX = random(0,5);
    //O2.velocityY = random(0,2);
   // O3.velocityX = random(0,5);
    //O3.velocityY = random(0,2);
   // O4.velocityX = random(0,5);
    //O4.velocityY = random(0,2);
    //O5.velocityX = random(0,5);
    //O5.velocityY = random(0,2);

  }
  
  //stopping other players when A not in control
  if(keyWentUp("A"))
  {
    O2.velocityX = 0;
    O2.velocityY = 0;
    O3.velocityX = 0;
    O3.velocityY = 0;
    O4.velocityX = 0;
    O4.velocityY = 0;
    O5.velocityX = 0;
    O5.velocityY = 0;
  }

  //moving defenders when sense of ball
  //if(ball.x > 1000 && ball.x < 1190)
  //{
    //O6.x = ball.x + 10;
    //O6.y = ball.y + 10;
    //O7.x = ball.x + 20;
    //O7.y = ball.y + 20;
    //O8.velocityX = ball.velocityX;
    //O8.velocityY = ball.velocityY;
    //O9.velocityX = ball.velocityX;
    //O9.velocityY = ball.velocityY;
    //O10.velocityX = ball.velocityX;
    //O10.velocityY = ball.velocityY;
  //}
  //giving control to player O2 Attacker
  if(keyDown("B"))
  {
    if(keyDown("up"))
  {
     O2.y = O2.y - 3;
  }
  
  if (keyDown("down"))
  {
    O2.y = O2.y + 3;
  }

  if (keyDown("left"))
  {
    O2.x = O2.x - 3;
  }

  if (keyDown("right"))
  {
    O2.x = O2.x + 3;
  }
  }


  //giving control to player O3 MF
  if (keyDown("C"))
  {
  if(keyDown("up"))
  {
     O3.y = O3.y - 3;
  }
  
  if (keyDown("down"))
  {
    O3.y = O3.y + 3;
  }

  if (keyDown("left"))
  {
    O3.x = O3.x - 3;
  }

  if (keyDown("right"))
  {
    O3.x = O3.x + 3;
  }
  }


  //giving control to player O4 MF
  if (keyDown("D"))
  {
  if(keyDown("up"))
  {
     O4.y = O4.y - 3;
  }
  
  if (keyDown("down"))
  {
    O4.y = O4.y + 3;
  }

  if (keyDown("left"))
  {
    O4.x = O4.x - 3;
  }

  if (keyDown("right"))
  {
    O4.x = O4.x + 3;
  }
  }


  //giving control to player O5 MF
  if (keyDown("E"))
  {
  if(keyDown("up"))
  {
     O5.y = O5.y - 3;
  }
  
  if (keyDown("down"))
  {
    O5.y = O5.y + 3;
  }

  if (keyDown("left"))
  {
    O5.x = O5.x - 3;
  }

  if (keyDown("right"))
  {
    O5.x = O5.x + 3;
  }
  }


  //giving control to player O6 DF
  if (keyDown("F"))
  {
  if(keyDown("up"))
  {
     O6.y = O6.y - 3;
  }
  
  if (keyDown("down"))
  {
    O6.y = O6.y + 3;
  }

  if (keyDown("left"))
  {
    O6.x = O6.x - 3;
  }

  if (keyDown("right"))
  {
    O6.x = O6.x + 3;
  }
  }

  //giving control to player O7 DF
  if (keyDown("G"))
  {
  if(keyDown("up"))
  {
     O7.y = O7.y - 3;
  }
  
  if (keyDown("down"))
  {
    O7.y = O7.y + 3;
  }

  if (keyDown("left"))
  {
    O7.x = O7.x - 3;
  }

  if (keyDown("right"))
  {
    O7.x = O7.x + 3;
  }
  }

  //giving control to player O8 DF
  if (keyDown("H"))
  {
  if(keyDown("up"))
  {
     O8.y = O8.y - 3;
  }
  
  if (keyDown("down"))
  {
    O8.y = O8.y + 3;
  }

  if (keyDown("left"))
  {
    O8.x = O8.x - 3;
  }

  if (keyDown("right"))
  {
    O8.x = O8.x + 3;
  }
  }

  //giving control to player O9 DF
  if (keyDown("I"))
  {
  if(keyDown("up"))
  {
     O9.y = O9.y - 3;
  }
  
  if (keyDown("down"))
  {
    O9.y = O9.y + 3;
  }

  if (keyDown("left"))
  {
    O9.x = O9.x - 3;
  }

  if (keyDown("right"))
  {
    O9.x = O9.x + 3;
  }
  }

  //giving control to player O10 DF
  if (keyDown("J"))
  {
  if(keyDown("up"))
  {
     O10.y = O10.y - 3;
  }
  
  if (keyDown("down"))
  {
    O10.y = O10.y + 3;
  }

  if (keyDown("left"))
  {
    O10.x = O10.x - 3;
  }

  if (keyDown("right"))
  {
    O10.x = O10.x + 3;
  }
  }

  //giving control to player O11 GK
  if (keyDown("K"))
  {
  if(keyDown("up"))
  {
     O11.y = O11.y - 3;
  }
  
  if (keyDown("down"))
  {
    O11.y = O11.y + 3;
  }

  if (keyDown("left"))
  {
    O11.x = O11.x - 3;
  }

  if (keyDown("right"))
  {
    O11.x = O11.x + 3;
  }
  }



 //giving motion to football by O1

 if (O1.collide(edge1)|| O1.collide(edge2) || O1.collide(edge3) || O1.collide(edge4))
 {
   O1.velocityX = 0;
   O1.velocityY = 0;
 }

 if (O1.isTouching(ball) && keyDown("space") && O1.x < ball.x)
 {
   ball.velocityX = random(4,8);
   ball.velocityY = random(-8,8);
   O1.velocityX = - (ball.velocityX/2);
   O1.velocityY = - (ball.velocityY/2);
   now = frameCount.value();
   
 }

 if (O1.isTouching(ball) && keyDown("space") && O1.x > ball.x)
 {
   ball.velocityX = random(-4,-8);
   ball.velocityY = random(-8,8);
   O1.velocityX = - (ball.velocityX/2);
   O1.velocityY = - (ball.velocityY/2);
 }

 if (O1.isTouching(ball) && keyDown("space") && O1.y < ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(4,8);
   O1.velocityX = - (ball.velocityX/2);
   O1.velocityY = - (ball.velocityY/2);
 }

 if (O1.isTouching(ball) && keyDown("space") && O1.y > ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(-4,-8);
   O1.velocityX = - (ball.velocityX/2);
   O1.x = O1
   O1.velocityY = - (ball.velocityY/2);     
 }

 if (frameCount = now + 20)
 {
   O1.velocityX = 0;
   O1.velocityY = 0;
 }

 //giving motion to football by O2
 if (O2.isTouching(ball) && keyDown("space") && O2.x < ball.x)
 {
   ball.velocityX = random(4,8);
   ball.velocityY = random(-8,8);
 }

 if (O2.isTouching(ball) && keyDown("space") && O2.x > ball.x)
 {
   ball.velocityX = random(-4,-8);
   ball.velocityY = random(-8,8);
 }

 if (O2.isTouching(ball) && keyDown("space") && O2.y < ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(4,8);
 }

 if (O2.isTouching(ball) && keyDown("space") && O2.y > ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(-4,-8);
 }

 //giving motion to football by O3
 if (O3.isTouching(ball) && keyDown("space") && O3.x < ball.x)
 {
   ball.velocityX = random(4,8);
   ball.velocityY = random(-8,8);
 }

 if (O3.isTouching(ball) && keyDown("space") && O3.x > ball.x)
 {
   ball.velocityX = random(-4,-8);
   ball.velocityY = random(-8,8);
 }

 if (O3.isTouching(ball) && keyDown("space") && O3.y < ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(4,8);
 }

 if (O3.isTouching(ball) && keyDown("space") && O3.y > ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(-4,-8);
 }


 //giving motion to football by O4
 if (O4.isTouching(ball) && keyDown("space") && O4.x < ball.x)
 {
   ball.velocityX = random(4,8);
   ball.velocityY = random(-8,8);
 }

 if (O4.isTouching(ball) && keyDown("space") && O4.x > ball.x)
 {
   ball.velocityX = random(-4,-8);
   ball.velocityY = random(-8,8);
 }

 if (O4.isTouching(ball) && keyDown("space") && O4.y < ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(4,8);
 }

 if (O4.isTouching(ball) && keyDown("space") && O4.y > ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(-4,-8);
 }

 //giving motion to football by O5
 if (O5.isTouching(ball) && keyDown("space") && O5.x < ball.x)
 {
   ball.velocityX = random(4,8);
   ball.velocityY = random(-8,8);
 }

 if (O5.isTouching(ball) && keyDown("space") && O5.x > ball.x)
 {
   ball.velocityX = random(-4,-8);
   ball.velocityY = random(-8,8);
 }

 if (O5.isTouching(ball) && keyDown("space") && O5.y < ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(4,8);
 }

 if (O5.isTouching(ball) && keyDown("space") && O5.y > ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(-4,-8);
 }

 //giving motion to football by O6
 if (O6.isTouching(ball) && keyDown("space") && O6.x < ball.x)
 {
   ball.velocityX = random(4,8);
   ball.velocityY = random(-8,8);
 }

 if (O6.isTouching(ball) && keyDown("space") && O6.x > ball.x)
 {
   ball.velocityX = random(-4,-8);
   ball.velocityY = random(-8,8);
 }

 if (O6.isTouching(ball) && keyDown("space") && O6.y < ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(4,8);
 }

 if (O6.isTouching(ball) && keyDown("space") && O6.y > ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(-4,-8);
 }

 //giving motion to football by O7
 if (O7.isTouching(ball) && keyDown("space") && O7.x < ball.x)
 {
   ball.velocityX = random(4,8);
   ball.velocityY = random(-8,8);
 }

 if (O7.isTouching(ball) && keyDown("space") && O7.x > ball.x)
 {
   ball.velocityX = random(-4,-8);
   ball.velocityY = random(-8,8);
 }

 if (O7.isTouching(ball) && keyDown("space") && O7.y < ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(4,8);
 }

 if (O7.isTouching(ball) && keyDown("space") && O7.y > ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(-4,-8);
 }

 //giving motion to football by O8
 if (O8.isTouching(ball) && keyDown("space") && O8.x < ball.x)
 {
   ball.velocityX = random(4,8);
   ball.velocityY = random(-8,8);
 }

 if (O8.isTouching(ball) && keyDown("space") && O8.x > ball.x)
 {
   ball.velocityX = random(-4,-8);
   ball.velocityY = random(-8,8);
 }

 if (O8.isTouching(ball) && keyDown("space") && O8.y < ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(4,8);
 }

 if (O8.isTouching(ball) && keyDown("space") && O8.y > ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(-4,-8);
 }

 //giving motion to football by O9
 if (O9.isTouching(ball) && keyDown("space") && O9.x < ball.x)
 {
   ball.velocityX = random(4,8);
   ball.velocityY = random(-8,8);
 }

 if (O9.isTouching(ball) && keyDown("space") && O9.x > ball.x)
 {
   ball.velocityX = random(-4,-8);
   ball.velocityY = random(-8,8);
 }

 if (O9.isTouching(ball) && keyDown("space") && O9.y < ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(4,8);
 }

 if (O9.isTouching(ball) && keyDown("space") && O9.y > ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(-4,-8);
 }
 
 //giving motion to football by O10
 if (O10.isTouching(ball) && keyDown("space") && O10.x < ball.x)
 {
   ball.velocityX = random(4,8);
   ball.velocityY = random(-8,8);
 }

 if (O10.isTouching(ball) && keyDown("space") && O10.x > ball.x)
 {
   ball.velocityX = random(-4,-8);
   ball.velocityY = random(-8,8);
 }

 if (O10.isTouching(ball) && keyDown("space") && O10.y < ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(4,8);
 }

 if (O10.isTouching(ball) && keyDown("space") && O10.y > ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(-4,-8);
 }

 //giving motion to football by O11
 if (O11.isTouching(ball) && keyDown("space") && O11.x < ball.x)
 {
   ball.velocityX = random(4,8);
   ball.velocityY = random(-8,8);
 }

 if (O11.isTouching(ball) && keyDown("space") && O11.x > ball.x)
 {
   ball.velocityX = random(-4,-8);
   ball.velocityY = random(-8,8);
 }

 if (O11.isTouching(ball) && keyDown("space") && O11.y < ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(4,8);
 }

 if (O11.isTouching(ball) && keyDown("space") && O11.y > ball.y)
 {
   ball.velocityX = random(-1,1);
   ball.velocityY = random(-4,-8);
 }


 ball.bounceOff(edge1);
 ball.bounceOff(edge2);
 ball.bounceOff(edge3);
 ball.bounceOff(edge4);

 if (ball.isTouching(P1))
 { 
   ball.velocityX = random(6,8);
   ball.velocityY = random(-20,-2);
 }
 if (ball.isTouching(P2))
 { 
   ball.velocityX = random(6,8);
   ball.velocityY = random(-20,-2);
 }
 if (ball.isTouching(P3))
 { 
   ball.velocityX = random(6,8);
   ball.velocityY = random(-20,-2);
 }
 if (ball.isTouching(P4))
 { 
   ball.velocityX = random(6,8);
   ball.velocityY = random(-20,-2);
 }
 if (ball.isTouching(P5))
 { 
   ball.velocityX = random(6,8);
   ball.velocityY = random(-20,-2);
 }
 if (ball.isTouching(P6))
 { 
   ball.velocityX = random(6,8);
   ball.velocityY = random(-20,-2);
 }
 if (ball.isTouching(P7))
 { 
   ball.velocityX = random(6,8);
   ball.velocityY = random(-20,-2);
 }  
 if (ball.isTouching(P8))
 { 
   ball.velocityX = random(6,8);
   ball.velocityY = random(-20,-2);
 }
 if (ball.isTouching(P9))
 { 
   ball.velocityX = random(6,8);
   ball.velocityY = random(-20,-2);
 }
 if (ball.isTouching(P10))
 { 
   ball.velocityX = random(6,8);
   ball.velocityY = random(-20,-2);
 }
 
 

 
  drawSprites();
}