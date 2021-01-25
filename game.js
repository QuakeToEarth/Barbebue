class Game
{
    constructor()
    {

    }
    readGameState()
    {
        var value = dataBase.ref("gameState")
        value.on("value",function(data){
            gameState = data.val()
        })
        

        
    }
    write(b)
    {
        dataBase.ref('/').update({
            'gameState': b
            
        }

        )
    }
    startGame()
    {
        if (gameState == 0)
        {
            player = new Player()
            player.readPlayerCount()
            form = new Form()
            form.display()
        }
    }
    pGame()
    {
        player.readAllPlayers()
        console.log(aPlay)
        var v = 100
        for(var plr in aPlay)
        {
            textSize(25);
            text(aPlay[plr].name+":"+aPlay[plr].distance, 50, v);
            v = v+40
        }
        if (keyIsDown(UP_ARROW))
        {
            player.distance = player.distance + 10
            player.createPlayerField()
        }
    }
}
