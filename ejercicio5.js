const prompt  = require('prompt-sync')();

function Vehiculo(modelo,marca,color,cilindraje,gasolina) {
    
    this.modelo = modelo,
    this.marca = marca,
    this.color = color,
    this.cilindraje = cilindraje,
    this.gasolina = gasolina,


    this.mostrarDatos = function(){
        console.log(`El modelo es ${this.modelo} la marca es ${this.marca} el color es ${this.color} la cilindrada es ${this.cilindraje} y la gasolina es de ${this.gasolina}`);
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



console.log("Datos primer vehiculo");
 
const veh1 = new Vehiculo(prompt("Escribe el modelo :"), prompt("Escribe tu marca :"),prompt("Escribe el color: "),
 Number(prompt("Que cilindraje es :")), Number(prompt("Cuanta gasolina tiene ? :")));
 
 veh1.conducir()
 veh1.mostrarGasolina()
 veh1.mostrarDatos()


console.log("Datos segundo vehiculo");
 
const veh2 = new Vehiculo(prompt("Escribe el modelo :"), prompt("Escribe tu marca :"),prompt("Escribe el color: "),
 Number(prompt("Que cilindraje es :")), Number(prompt("Cuanta gasolina tiene ? :")));
 
 veh2.conducir()
 veh2.mostrarGasolina()
 veh2.mostrarDatos()


console.log("Datos tercer vehiculo");
 
const veh3 = new Vehiculo(prompt("Escribe el modelo :"), prompt("Escribe tu marca :"),prompt("Escribe el color: "),
 Number(prompt("Que cilindraje es :")), Number(prompt("Cuanta gasolina tiene ? :")));
 
 veh3.conducir()
 veh3.mostrarGasolina()
 veh3.mostrarDatos()
