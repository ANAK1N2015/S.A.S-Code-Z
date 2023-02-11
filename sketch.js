var game,form,player;
var gameState,playerCount;
var database;
var formulary,game;
var bkImg;
function preload(){
    bkImg=loadImage("Concept art/main menu.jpeg")
    bk1=loadImage("Concept art/bk1.jpg")
}
function setup(){
canvas=createCanvas(windowWidth,windowHeight)
database=firebase.database();
game=new Game();
game.start();
game.gameState();
}
function draw(){
background(bkImg)
}

function windowResized(){
resizeCanvas(windowWidth,windowHeight);
}