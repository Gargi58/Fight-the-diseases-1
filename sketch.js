var gameState = 0;
var girl , boy,Name;
var time,boyButton,girlButton,submit;
var about, start, inst;
function preload()
{
 // georama = loadFont('https://fonts.googleapis.com/css2?family=Georama:ital,wght@1,700&display=swap'); 
 boyImg = loadImage("Boy.png");
 girlImg = loadImage("girl.png");
 bgImg1 = loadImage('bg.jpg');
 bgImg2 = loadImage("bg2.png");
 bgImg3 = loadImage("bg4.png");
 bgImg4 = loadImage("bg5.jpg");
 bgImg5 = loadImage("bg6.jpg");
}
function setup()
{
  createCanvas(displayWidth,displayHeight);

  input = createInput('Enter your name');
  input.position(displayWidth/2.45 , displayHeight/2.2);
  input.style("color","blue");
  input.style("background-color","skyblue");

  submit = createButton('Submit');
  submit.position(input.x+50,input.y+50);
  submit.style("color","purple");
  submit.style("border","solid");
  submit.style("background-color","lightgreen");
  submit.mousePressed(()=>{
    gameState = 0.5;
    input.hide();
    submit.hide();

    girl =  createSprite(displayWidth/1.7, displayHeight/2, 80, 80);
    girl.shapeColor = "magenta";
    girl.scale = 3;
    girl2 =  createSprite(displayWidth/1.7, displayHeight/2, 80, 80);
    girl2.addImage(girlImg);
    girl2.scale = 0.25;
    boy =  createSprite(displayWidth/3, displayHeight/2, 80, 80);
    boy.shapeColor = "blue";
    boy.scale = 3;
    boy2 =  createSprite(displayWidth/3, displayHeight/2, 80, 80);
    boy2.scale = 0.1;
    boy2.addImage(boyImg);


    boyButton  = createButton('Boy');
    boyButton.position(boy.x-25,boy.y+150);
    boyButton.style("color","black");
    boyButton.style("border","solid");
    boyButton.style("background-color","pink");
    
    girlButton  = createButton('Girl');
    girlButton.position(girl.x-25,girl.y+150);
    girlButton.style("color","black");
    girlButton.style("border","solid");
    girlButton.style("background-color","pink");

    girlButton.mousePressed(()=>{
      destroy();
      menu();
    })
    boyButton.mousePressed(()=>{
      destroy();
      menu();
    })
  })
  
}
function draw() 
{
  if(gameState === 0)
  {
  background(bgImg1);
  fill(255,0,102);
  stroke(255);
  strokeWeight(4);
  textSize(100);
  textFont("Arabic");
  textAlign(CENTER,CENTER);
  text ("Fight the diseases",displayWidth/2,displayHeight/13);
  }
  if(gameState=== 0.5)
  {
    fill("yellow");
    stroke("purple");
    strokeWeight(3);
    textSize(42);
    text("Choose your gender ",displayWidth/3 , displayHeight/3.6);

    fill("turquoise");
    stroke("darkgreen");
    strokeWeight(3);
    textSize(42);
    text("Hello "+Name,displayWidth/3 , displayHeight/4.8);
  }
  if(gameState === 1)
  {
    background(bgImg2);
  }
  if(gameState === 1.5)
  {
    background(bgImg3);
    fill("turquoise");
    textFont("Georgia");
    stroke("blue");
    strokeWeight(4);
    textSize(30);
    text("So the main objective of making this project is to create awareness among people about vaccination",displayWidth/10 , displayHeight/1.3);
  }
  if(gameState === 2)
  {
    background(bgImg4);
    fill("red");
    textFont("Georgia");
    stroke("white");
    strokeWeight(4);
    textSize(32);
    text("•	You have to move the player with right and left arrow keys",displayWidth/6 , displayHeight/4.8);
    text("•	You have to save the player from the obstacles by moving left or right",displayWidth/6 , displayHeight/2.8);
    text("•	You have to reach the vaccination centre before your lives get exhausted",displayWidth/6 , displayHeight/1.8);
  }
  if(gameState === 3)
  {
    background(bgImg5);
    fill("turquoise");
    textFont("Georgia");
    stroke("blue");
    strokeWeight(4);
    textSize(70);
    text("WAIT FOR THE SECOND PART OF THE GAME",displayWidth/28 , displayHeight/2.1);
  }
  drawSprites();
  Name = input.value();
  console.log(gameState);
}


function destroy()
{
  girlButton.hide();
  boyButton.hide();
  boy.visible = false;
  boy2.visible = false;
  girl.visible = false;
  girl2.visible = false;
  gameState = 1;
}
function menu()
{
  about = createButton("About game");
  about.position(displayWidth/2.3,displayHeight/2.2);

  start = createButton("Play");
  start.position(displayWidth/2.2,displayHeight/3);

  inst = createButton("Instructions");
  inst.position(displayWidth/2.3,displayHeight/2.5);

  about.mousePressed(()=>{
    about.hide();
    inst.hide();
    start.hide();
    gameState = 1.5;
    Home();
  })
   inst.mousePressed(()=>{
    about.hide();
    inst.hide();
    start.hide();
    gameState = 2;
    Home();
   })
   start.mousePressed(()=>{
    about.hide();
    inst.hide();
    start.hide();
    gameState = 3;
    Home();
   })
}


function Home()
{
  home = createButton("Home");
  home.position(displayWidth/20,displayHeight/20);

  home.mousePressed(()=>{
    gameState = 1;
    about.show();
    inst.show();
    start.show();
  })
  
}