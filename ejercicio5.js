const prompt  = require('prompt-sync')();

function Vehiculo(modelo,marca,color,cilindraje,gasolina) {
    
    this.modelo = modelo,
    this.marca = marca,
    this.color = color,
    this.cilindraje = cilindraje,
    this.gasolina = gasolina,


    this.mostrarModelo = function(){
        console.log(`El modelo es ${this.modelo}`);
    }

    this.mostrarGasolina = function(){
        console.log(`Tu gasolina actual es ${this.gasolina}`);
    }

    this.conducir = function (){
      
        if(this.gasolina == 0){
            console.log("Te quedaste sin gasolina");
        }else if(this.gasolina == 20){
            console.log("Alerta! Deberias ir a respostar");
        }else{
          this.gasolina -= 5
        }

    }


}


const veh1 = new Vehiculo();