class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("PLAY");
        this.greeting = createElement("h2");

   
    }


display()
{

    var title = createElement("h2");
    title.html("CAR RACING GAME");
    title.position(displayWidth/2-120,40);
    

    this.input.position(displayWidth/2-120,displayHeight-550);

    this.button.position(displayWidth/2-60,displayHeight-330);


    
    this.button.mousePressed(()=>{
        
        player.name = this.input.value();
         
        playerCount = playerCount + 1;
        player.index = playerCount;

        player.update();
        player.updateCount(playerCount);

        this.greeting.html("Hello " + player.name);
        this.greeting.position(400,300);

        this.input.hide();
        this.button.hide();
        


    })
}

hide()
{
    this.input.hide();
    this.button.hide();
    this.greeting.hide();



}


}