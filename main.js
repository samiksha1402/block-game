coin_img = "";
bomb_img = "";
fire_img = "";
player_img = "";
spike_img = "";
trophy_img = "";
playerX = 10;
playerY = 400;

function preload(){
    coin_img= loadImage("coin_prev.png");
    bomb_img= loadImage("bombimage_prev.png");
    fire_img= loadImage("fireimage_prev.png");
    player_img= loadImage("playerimage_prev.png");
    spike_img= loadImage("spikeimage_prev.png");
    trophy_img= loadImage("trophyimage_prev.png");
    bg= loadImage("https://images.megapixl.com/3796/37960353.jpg");
}


width="";
height="";

function setup(){
    width=window.innerWidth;
height=window.innerHeight;
    canvas= createCanvas(width,height-150);
    canvas.position(0,150);
}
ctx=canvas.getContext("2d");
function draw(){
    image(bg,0,0,width,height+50);
    image(coin_img,50,100,120,100);
    image(coin_img,200,250,120,100);
    image(coin_img,355,60,120,100);
    image(coin_img,650,60,120,100);
    image(coin_img,510,0,120,100);
    image(coin_img,1000,250,120,100);
    image(coin_img,770,250,120,100);

    image(coin_img,1400,60,120,100);
    image(coin_img,1100,60,120,100);
    image(coin_img,1250,0,120,100);

    image(trophy_img,1600,200,135,160);
   
    image(player_img,5,400,150,130);

    image(bomb_img,1270,375,80,60);

    image(fire_img,1270,100,60,40);

    image(fire_img,550,100,60,40);

    image(spike_img,900,200,60,50);
}
function add(){
    playerimage= new Image();
    playerimage.onload= uploadplayerimage();
    playerimage.src= player_img;
}
function uploadplayerimage(){
    ctx.drawImage(playerimage, playerX,playerY,150,130);
}
window.addEventListener("keydown", myKeydown);

function myKeydown(e){
keypressed= e.keyCode;
if(keypressed=="38"){
    up();
}
if(keypressed=="40"){
    down();
}
if(keypressed=="37"){
    left();
}
if(keypressed=="39"){
    right();
}
}

function up(){
    if(playerY>=0){
        playerY= playerY - 10;
        uploadplayerimage();
    }
}
function down(){
    if(playerY<=1000){
        playerY= playerY + 10;
        uploadplayerimage();
    }
}
function left(){
    if(playerX>=0){
        playerX= playerX - 10;
        uploadplayerimage();
    }
}
function right(){
    if(playerX<=1000){
        playerX= playerX + 10;
        uploadplayerimage();
    }
}
