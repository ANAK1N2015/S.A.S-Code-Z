class form{
    constructor(){
this.input=createInput("nombre").attribute("placeholder","ingresa tu nombre");
this.button=createButton("play");
this.saludos=createElement("h2");
    }
setStyle(){
this.input.class("inputstyle");
this.button.class("buttonPlay");
this.saludos.class("efectos");
}


display(){
    this.input.position(130,160)
    this.button.position(250,200)
    this.setStyle();
    this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();
        var mensaje= 'Hola ${this.input.value()</br> Espera a que se una otro jugador...
    this.saludos.html(mensaje);
        playerCount+=1
player.name=this.input.value();
player.index=playerCount;
player.actualizarNumero(playerCount);
player.agregarJugador();
player.obtenerDistancia();
});    
}
}