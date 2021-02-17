class Player{

    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = 0;

    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name, 
            distance:this.distance, 
            rank: this.rank});


    }

    getCount(){ 

        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){ 
            playerCount = data.val(); 
        })
     } 
    
    updateCount(count){ 

    database.ref('/').update({ playerCount: count }); 

        }

    static getPlayerInfo(){

        var playerInfo = database.ref("players")
        playerInfo.on("value", function(data){
            allPlayers = data.val();
        })

    }

    static updateCarsCountEnd(){

        database.ref('/').update({carsCountEnd: finishedPlayers + 1})
        this.rank = finishedPlayers + 1
        

    }

    getCarsCountEnd(){
        var temp = database.ref("carsCountEnd")
        temp.on("value", function(data){
            finishedPlayers = data.val();
        })

        
    }
}
