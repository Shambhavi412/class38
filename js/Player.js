class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
    }



    getCount()
    {
        
            var getCountRef = database.ref("playerCount");
            getCountRef.on("value",function(data)
            {
                playerCount = data.val();
        
            })
        


    }

    updateCount(count)
    {
        database.ref("/").update({
            playerCount : count
        })


    }

    update()
    {
        //why didn't we use the playercount
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        })

    }

    static getPlayerInfo()
    {
        var playerInfoRef = database.ref("players");
        //arroy function ensures that it remains bound to the class/object(this) which is calling it
        playerInfoRef.on("value",(data)=>{
            //allPlayers is an array because it contains more than one value

            allPlayers = data.val();
        })
    }

    





}