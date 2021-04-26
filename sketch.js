var database;
var player;
var game;
var form;
var gamestate = 0;
var playerCount;
var allPlayers;
var cars;
var car1, car2, car3, car4;

function setup(){
    createCanvas(displayWidth-200,displayHeight-200);
   
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    }

function draw(){
    //background("white");

    if(playerCount===4)
    {
        game.update(1);
    }

    if(gamestate===1)
    {
        clear();
        game.play();
    }
    
    }

