var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var clouds;
var imgclouds;
var score;
var obs1,obs2,obs3,obs4,obs5,obs6;
var Tempodejogo;

function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  imgclouds= loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
  obs1 = loadImage("obstacle1.png");
  obs2 = loadImage("obstacle2.png");
  obs3 = loadImage("obstacle3.png");
  obs4 = loadImage("obstacle4.png");
  obs5 = loadImage("obstacle5.png");
  obs6 = loadImage("obstacle6.png");
}

function setup() {

  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crie sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crie um solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  console.log(5+"     Oi");
  
  //gerar números aleatórios
  var rand =  Math.round(random(1,100))
  //console.log(rand)

Tempodejogo = 0;
}

function draw() {
//console.log(frameCount);
  //definir cor do plano de fundo
  background(180);
  //console.log(trex.y)
text ("Tempo De Jogatina:"+Tempodejogo,250,50);
Tempodejogo = Tempodejogo+Math.round(frameCount/60);

  // pulando o trex ao pressionar a tecla de espaço
  if(keyDown("space")&& trex.y >= 150) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);
  
  //Gerar Nuvens
  spawnClouds();
  gerarobstaculos();
  drawSprites();
}

//função para gerar as nuvens
function spawnClouds(){
 //escreva seu código aqui

if(frameCount%60 ===0){
  clouds= createSprite(600,100,40,10);
  clouds.y = Math.round(random(10,100));
  clouds.addImage(imgclouds);
  clouds.depth = trex.depth;
  trex.depth = trex.depth+1;
  clouds.velocityX= -3;

  clouds.lifetime = 250;
}

}
function gerarobstaculos(){
  if(frameCount%60 ===0){
var obstaculos = createSprite(600,165,10,40);
obstaculos.velocityX =-6;
var numeroRan = Math.round(random (1,6));
switch(numeroRan){
case 1:
  obstaculos.addImage(obs1);
break

case 2:
  obstaculos.addImage(obs2);
  break

  case 3:
  obstaculos.addImage(obs3);
  break

  case 4:
  obstaculos.addImage(obs4);
 break

 case 5:
 obstaculos.addImage(obs5);
 break

 case 6:
 obstaculos.addImage(obs6);
break

default:break
}
obstaculos.scale =0.5;

obstaculos.lifetime = 300;
  }


}



