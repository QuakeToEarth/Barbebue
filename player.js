class Player
{
constructor(){
this.name = null
this.distance = 0
}
readPlayerCount()
    {
        var value = dataBase.ref("playerCount")
        value.on("value",function(data){
            count = data.val()
        })
        

        
    }
    writePlayerCount(a)
    {
        dataBase.ref('/').update({
            'playerCount': a
        }

        )
    }
    createPlayerField(abc)
    {
        var a = "allplayers/player"+count
        dataBase.ref(a).set({
            'name': this.name,
            'distance':this.distance
        
 
    } 
    )

    }
    readAllPlayers()
    {
        var value = dataBase.ref("allplayers")
        value.on("value",function(data){
            aPlay = data.val()  
            })
} }
