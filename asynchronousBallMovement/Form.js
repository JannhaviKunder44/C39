class Form{
    constructor(){
        this.title = createElement('h2')//h1-h6
        this.input = createInput("Name");
        this.button = createButton("PLAY");
        this.greeting = createElement('h3');
    }
   hide(){
       this.greeting.hide();
       this.button.hide();
       this.input.hide();

   }
    display(){
        
        this.title.html("CAR RACING GAME");
        this.title.position(130,0);

        
        this.input.position(130,160);

       
        this.button.position(130,200);

        this.button.mousePressed(()=>{//anonymous function
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();//gets us word written in the input box
           
           // playerCount = playerCount+1;
           playerCount += 1;
           player.index = playerCount;

           //player.update(name);
           player.updateCount(playerCount);
           
           this.greeting.html("hello "+player.name);
           this.greeting.position(130,160);
        })
    }
}

