class Game
{

    constructor()
    {
     }


getState()
{
    var gameStateRef = database.ref("gamestate");
    gameStateRef.on("value",function(data)
    {
        gamestate = data.val();

    })


}

update(state){
    database.ref("/").update({
        gamestate:state
    })

}

 async start(){
    if(gamestate===0)
    {
        player = new Player();
       //

       /*we can set up a
       .once() asynchronous listener which
       will get the playerCount data only
       once and then execute getCount() to
       set up a permanent listener*/
        var playerCountRef = await database.ref("playerCount").once("value")
            if(playerCountRef.exists())
            {
                playerCount = playerCountRef.val();
                player.getCount();

            }
            



        form = new Form();
        form.display();

    

    }

    car1 = createSprite(100,100);
    car2 = createSprite(300,100);
    car3 = createSprite(500,100);
    car4 = createSprite(700,100);

    cars = [car1,car2,car3,car4];


    
    }

play()
{
    form.hide();
    text("GAME START!",200,200);
/// the line below
    Player.getPlayerInfo();

    

    

    if(allPlayers !== undefined)
    {
        //var display_p = 200;
        var CarIndex = 0;
        var x = 100;
        

        for(var plr in allPlayers)
        {
            
       x = x + 200;

       CarIndex = CarIndex + 1;

       cars[CarIndex-1].x = x;
       //value of plr
       //how will the x position increase
       cars[CarIndex-1].y = displayHeight-allPlayers[plr].distance;


       if(CarIndex === player.index)
       {
           cars[CarIndex-1].shapeColor = "red";
           camera.position.x = cars[CarIndex-1].x;
           
           camera.position.y = cars[CarIndex-1].y;
       }

       


       

    
    }
        
    }

    if(keyIsDown(UP_ARROW)&& gamestate===1)
    {
        player.distance += 50;
        // why are we calling it at two different positions
        player.update();
    }

    


        drawSprites();
   
    
    
}

















}