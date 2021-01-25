class Form
{
    constructor()
    {

    }
    display()
    {
        var heading = createElement('h1')
        heading.html("🚗 Car Racing Game 🚗")
        heading.position(displayWidth-1000,displayHeight-860)
        var putName = createInput("Enter Name")
        putName.position(displayWidth-950,displayHeight-640)
        var box = createButton("Press Here")
        box.position(displayWidth-950,displayHeight-620)
        box.mousePressed(function (){
           player.name = putName.value()
            count = count+1
            player.writePlayerCount(count)
            putName.hide()
            box.hide()
        var greeting = createElement('h2')
        greeting.html("💖 Hello "+ player.name +"💖")
        greeting.position(displayWidth-950,displayHeight-620)
        player.createPlayerField()
        })
    }
}