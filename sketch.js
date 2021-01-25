var game, form, player
var dataBase
var gameState = 0
var count = 0
var aPlay;
function setup(){
    createCanvas(displayWidth,displayHeight);
    dataBase = firebase.database()
    game = new Game()
    game.readGameState()
    game.startGame()
}

function draw(){
    background("white");
    if (count == 4)
    {
        gameState = 1
        game.write(1)
    }
    if (gameState == 1)
{
    game.pGame()
}
}
