var soccer;
var pingPong;
var gameState=null;
var player;
var fieldImage;
var soccerPlayerScore;
var soccerComScore;
var home;
var goal1;
var goal2;
var goal3;
var goal4,goal5,goal6;
var border1,border2,border3,border4;
var soccerBall;
var uplayer;
var d, dImage;
var dcount;
var golfButton;
var golfbg;
var golfball,ghole,gholeImage;
var golfballImage;
var holetouch;
var line;
var golfline;
var golfwall1,golfwall2;
var getback;
var rect;
var animateImage,time;
var bowlingPlayer, bowlingButton;
var h1,h2,h3,h4,h5,h6,h7,h8,getall,keep;
var bbImage;
var hitImage;
var reset;
var ad;
var bowlbounce, bowlbounce2;
var hitbounce1,hitbounce2;
function preload(){
fieldImage=loadImage("usefield.png")
dImage= loadImage("used.png")
golfballImage=loadImage("usegolfball.png")
golfbg=loadImage("usegolfbg.png")
gholeImage=loadImage("useghole.png")
animateImage=loadImage("animation.gif")
hitImage=loadImage("hitb.png")
bbImage=loadImage("useball.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
 soccer= createButton("Soccer")

  soccer.position(width/1.5-width/2,height/2-160)

  home= createButton("Home")
  home.position(width/1.8-width/2,height/2-400)


  player=createSprite(width/1.2-width/2,height/2-340,470,15)
  player.shapeColor="yellow"

  player.visible=false;

  goal1=createSprite(width/1.2-width/2,height/2-440,10,60)
  goal1.visible=false

  goal2=createSprite(width/.858-width/2,height/2-440,10,60)
  goal2.visible=false

  goal3=createSprite(width/1-width/2,height/2-400,600,15)
goal3.visible=false

border1=createSprite(width/1.97-width/2,height/2,10,1000)
border1.visible=false

border2=createSprite(width/.68-width/2,height/2,10,1000)
border2.visible=false



goal4=createSprite(width/1.2-width/2,height/2+427,10,60)
goal4.visible=false

goal5=createSprite(width/.860-width/2,height/2+427,10,60)
goal5.visible=false

goal6=createSprite(width/1-width/2,height/2+380,600,15)
goal6.visible=false



soccerBall=createSprite(width/1-width/2,height/2,50,40)
soccerBall.visible=false
soccerBall.shapeColor="black"

uplayer=createSprite(width/1-width/2,height/2+320,300,15)
uplayer.shapeColor="yellow"

border3=createSprite(width/1-width/2,height/2+450,1900,10)
border3.visible=false;

border4=createSprite(width/1-width/2,height/2-460,1900,10)
border4.visible=false;

golfball=createSprite(width/1-width/2,height/2+340)
golfball.addImage("golf",golfballImage)
golfball.scale=.2
golfball.visible=false;

ghole=createSprite(width/.75-width/2,height/2-200)
ghole.addImage("hole of golf",gholeImage)
ghole.scale=.5
ghole.visible=false;

holetouch=createSprite(width/.76-width/2,height/2-133,70,20)
holetouch.visible=true;


d=createSprite(width/.73-width/2,height/2-400)
d.addImage("diamond",dImage)
d.scale=.3

line=createSprite(width/.76-width/2,height/2-100,10,50)
line.visible=false
line.shapeColor="black"

golfwall1=createSprite(width/1.9-width/2,height/2,10,1000)
golfwall1.visible=false
golfwall2=createSprite(width/.73-width/2,height/2,10,1000)
golfwall2.visible=false

getback=createSprite(width/1.14-width/2,height/2-100,1600,200)
getback.visible=true


rect=createSprite(width/1.040-width/2,height/2+320)
rect.addImage("player",animateImage)
rect.visible=false


// bowling sprites

h1=createSprite(width/1-width/2,height/2-300)
h1.addImage("hit1",hitImage)
h1.scale=.2
h1.visible=false

h2=createSprite(width/1.1-width/2,height/2-450)
h2.addImage("hit1",hitImage)
h2.scale=.2
h2.visible=false

h3=createSprite(width/.95-width/2,height/2-550)
h3.addImage("hit1",hitImage)
h3.scale=.2
h3.visible=false


h4=createSprite(width/1-width/2,height/2-650)
h4.addImage("hit1",hitImage)
h4.scale=.2
h4.visible=false


bowlingPlayer=createSprite(width/1-width/2,height/2)
bowlingPlayer.addImage("bowlingmainplayer",bbImage)
bowlingPlayer.scale=.1
bowlingPlayer.visible=false

bowlbounce=createSprite(width/.9-width/2,height/2,10,1000)
bowlbounce.shapeColor="green"
bowlbounce.visible=false
bowlbounce2=createSprite(width/1.15-width/2,height/2,10,1000)
bowlbounce2.shapeColor="green"
bowlbounce2.visible=false




  soccerPlayerScore=0
  soccerComScore=0

  golfButton= createButton("Golf")
  golfButton.position(width/1.3-width/2,height/2-160)

  
  bowlingButton= createButton("Runner")
  bowlingButton.position(width/1.1-width/2,height/2-160)

  player.velocityX=-12.1

  soccerBall.velocityY=-3;
soccerBall.velocityX=15

line.velocityX=-15

dcount=7
time=0

keep=0

reset=0

ad=""

}

function draw() {
  background("white");
textSize(50)
fill("black")
  text(": "+dcount,width/.71-width/2,height/2-392)
  uplayer.velocityX=0
  uplayer.velocityY=0
// presses
player.bounceOff(border1)
player.bounceOff(border2)


soccerBall.bounceOff(border1)
soccerBall.bounceOff(border2)
soccerBall.bounceOff(border4)
soccerBall.bounceOff(border4)

soccerBall.bounceOff(player)
soccerBall.bounceOff(uplayer)

line.bounceOff(golfwall1)
line.bounceOff(golfwall2)



uplayer.visible=false

if(gameState==="home"){
background("white")
player.visible=false
soccerBall.visible=false
golfball.visible=false
ghole.visible=false
line.visible=false;
rect.visible=false

bowlbounce.visible=false
bowlbounce2.visible=false

textSize(10)
fill("red")
text("Click the Button on top to watch an AD to have 7 diamonds Again! Watch it when you have less than 7 Diamonds"+ad,width/1.95-width/2,height/2-450)
//bowling

h1.visible=false
h2.visible=false
h3.visible=false
h4.visible=true
bowlingPlayer.visible=false



soccer.show()
golfButton.show();
bowlingButton.show()
textSize(50)
fill("black")
  text(": "+dcount,width/.71-width/2,height/2-392)
}





  soccer.mousePressed(()=>{
gameState="soccer"
dcount=dcount-1
  })
  golfButton.mousePressed(()=>{
    gameState="golf"
    dcount=dcount-1
      })
  if(dcount<0){
    gameState="home"
  }

  bowlingButton.mousePressed(()=>{

gameState="bowling"
dcount=dcount-1
  })

  home.mousePressed(()=>{
gameState="home"

time=0
keep=0

//runner bowling 

h1.velocityY=0
h1.y=height/2-300

h2.x=width/1.1-width/2
h2.y=height/2-450
h2.velocityY=0

h3.x=width/.96-width/2
h3.y=height/2-550
h3.velocityY=0

h4.x=width/1-width/2
h4.y=height/2-650
h4.velocityY=0

bowlingPlayer.x=width/1-width/2
bowlingPlayer.velocityX=0
soccerComScore=0
soccerPlayerScore=0
      })



  //soccer play.
  if(gameState==="soccer"){
   

    golfButton.hide()
    bowlingButton.hide();
    textSize(50)
fill("black")
  text(": "+dcount,width/.71-width/2,height/2-392)


    background(fieldImage)
player.visible=true;
soccerBall.visible=true;
uplayer.visible=true

player.bounceOff(border1)
player.bounceOff(border2)



soccerBall.bounceOff(border1)
soccerBall.bounceOff(border2)
soccerBall.bounceOff(border4)
soccerBall.bounceOff(border4)

soccerBall.bounceOff(player)
soccerBall.bounceOff(uplayer)
// the score conditions
if(soccerBall.isTouching(goal1)||soccerBall.isTouching(goal2)||soccerBall.isTouching(goal3)){
  soccerPlayerScore=soccerPlayerScore+1
  soccerBall.x=width/1-width/2
  soccerBall.y=height/2
}
if(soccerBall.isTouching(goal4)||soccerBall.isTouching(goal5)||soccerBall.isTouching(goal6)){
  soccerComScore=soccerComScore+1
  soccerBall.x=width/1-width/2
  soccerBall.y=height/2
}

if(soccerPlayerScore>4){
  textSize(30)
  fill("red")
text("You Win.", width/1.2-width/2,height/2)
soccerComScore=0
soccerPlayerScore=0
dcount=dcount+3

}
if(soccerComScore>4){
  textSize(30)
  fill("red")
text("You lose! Best of Luck. Take another try.", width/1.2-width/2,height/2)
soccerComScore=0
soccerPlayerScore=0
dcount=dcount-1

}
if(soccerComScore>4){
  textSize(30)
  fill("red")
text("You lose! Best of Luck. Take another try.", width/1.2-width/2,height/2)
soccerComScore=0
soccerPlayerScore=0
}

soccer.hide();
fill("black")
textSize(50)
text(""+soccerPlayerScore,width/1.6-width/2,height/2+20)

text(""+soccerComScore,width/1.6-width/2,height/2-60)


//movement to our player

if((touches.length>0 && touches[0].x<width/2  )||keyDown("a")){
  uplayer.velocityX=-8
  touches=[]
}

if((touches.length>0 && (touches[0].x>width/2 && touches[0].x<width) )||keyDown("d")){
  uplayer.velocityX=8
  touches=[]
}

  }
  // soccer is finished. Now its the turn for golf
if(gameState==="golf"){
  line.bounceOff(golfwall1)
  line.bounceOff(golfwall2)
  golfball.visible=true
  line.visible=true
  soccer.hide();
  golfButton.hide();
  bowlingButton.hide();
  background(golfbg)
  ghole.visible=true;
  if(golfball.isTouching(holetouch)){
    text("You Win",width/1.1-width/2,height/2)
  }
  if(keyDown("space")|| touches.length>0){
    golfball.x=line.x
    golfball.y=line.y
    touches=[]
    
  }
  if(golfball.isTouching(getback)){
    dcount=dcount-1
    golfball.x=width/1-width/2
    golfball.y=height/2+340
  }
  textSize(30)
  text("time"+time,width/2.5-width/2,height/2)
  if(golfball.isTouching(holetouch)){
    time=time+1;
    dcount=dcount+2

  }
  if(time>0&&time<2){
   
    golfball.x=width/1-width/2
    golfball.y=height/2+340
ghole.x=width/1-width/2
ghole.y=height/2-200

holetouch.x=width/1.020-width/2
holetouch.y=height/2-133

getback.x=width/.7-width/2
  }
  
  if(golfball.isTouching(holetouch)&&time>0&&time<2){
    time=time+1;
    dcount=dcount+2
  }

  if(time>1){
    golfball.x=width/1-width/2
    golfball.y=height/2+340
ghole.x=width/1-width/2
ghole.y=height/2-200

holetouch.x=width/1.020-width/2
holetouch.y=height/2-133

getback.x=width/.1-width/2
  }
  if(golfball.isTouching(holetouch)&&time>2&&time<4){
    time=time+1;
    dcount=dcount+2;
  }
  if(time>2){
    golfball.x=width/1-width/2
    golfball.y=height/2+340

    ghole.x=width/1.5-width/2
    ghole.y=height/2-200

    holetouch.x=width/1.5060-width/2
    holetouch.y=height/2-133

    getback.x=width/.9-width/2
    
   

  }

  if(golfball.isTouching(holetouch)&&time>3&&time<5){
    time=time+1;
    dcount=dcount+2;
  }
  if(time>3){
    golfball.x=width/1-width/2
    golfball.y=height/2+340

    ghole.x=width/.9-width/2
    ghole.y=height/2-200

    holetouch.x=width/.9050-width/2
    holetouch.y=height/2-133

    getback.x=width/1.5-width/2


  }
  if(time>4){
    
    fill("blue")
    textSize(40)
    text("To Play Again Go back to home And come back to this game. You have won the Golf Challange.Good Job!",width/1.9-width/2,height/2)
    
  }
  rect.visible=true
}             

//golf is done. now its the time for running;

if(gameState==="bowling"){
  background("white")
  bowlingButton.hide()
  golfButton.hide()
  soccer.hide()
h1.visible=true
h2.visible=true
h3.visible=true
h4.visible=true

h1.velocityY=7
h2.velocityY=8
h3.velocityY=9
h4.velocityY=9


bowlingPlayer.visible=true
bowlbounce.visible=true
bowlbounce2.visible=true

bowlingPlayer.bounceOff(bowlbounce2)
bowlingPlayer.bounceOff(bowlbounce)

if(bowlingPlayer.isTouching(h1)||bowlingPlayer.isTouching(h2)||bowlingPlayer.isTouching(h3)||bowlingPlayer.isTouching(h4)){
  dcount=dcount-1
  h1.velocityY=0
  h1.y=height/2-300
  
  h2.x=width/1.1-width/2
  h2.y=height/2-450
  h2.velocityY=0

  h3.x=width/.96-width/2
h3.y=height/2-550
h3.velocityY=0

h4.x=width/1-width/2
h4.y=height/2-650
h4.velocityY=0

  bowlingPlayer.x=width/1-width/2
  bowlingPlayer.velocityX=0
  soccerComScore=0
}
/*bowlingPlayer.visible=true
bowlingPlayer.bounce(h1)
bowlingPlayer.bounce(h2)
bowlingPlayer.bounce(h3)
bowlingPlayer.bounce(h4)
bowlingPlayer.bounce(h5)
bowlingPlayer.bounce(h6)
bowlingPlayer.bounce(h7)*/

if(h1.velocityY=7){
  reset=1
}
if((touches.length>0 && touches[0].x<width/2  )||keyDown("a")){
  bowlingPlayer.velocityX=-8
  touches=[]
}
if((touches.length>0 && (touches[0].x>width/2 && touches[0].x<width) )||keyDown("d")){
  bowlingPlayer.velocityX=8
  touches=[]
}




/*if(bowlingPlayer.isTouching(getall)){
 

  keep=keep+1

  
}

text("keep:"+keep,width/1-width/2,height/2)
if(keep>0){
  h1.x=width/1.5-width/2
  getall.x=width/1-width/2
  bowlingPlayer.x=width/1.5-width/2
  bowlingPlayer.y=height/2
}*/
  text(": "+dcount,width/.71-width/2,height/2-392)
}
 drawSprites();
    
}

  