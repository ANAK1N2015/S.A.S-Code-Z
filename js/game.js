class Game {
    constructor (){

   
    }
    start(){
        player=new player();
        player.limit();

        formulary=new form();
        formulary.display();
    } 

    play(){
player.obtenerInfoPlayers();
        if(allPlayers=2){
            Image(background2,0,0,width,height);
                var index=0
                for(var player in allPlayers){
                    index=index+1
                    var x= allPlayers [player].positionX;
                    var x= height-allPlayers [player].positionY;
                }

        }
    }

drawSprites(){
camera.position.x= [index-1].position.x
camera.position.y= [index-1].position.y
}

    gameState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value"),function(data);
        gameState=data.val();
    }

    updateState(state){
        database.ref("/").update({gameState:state});
    }
}