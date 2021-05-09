class Player{
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null
    }

    getCount(){
        var playerCountRef = database.ref('playerCount').on('value', 
        function(data){
playerCount = data.val();

         } ) 
    }


    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    update(name){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            name :name
        })
    }
}




