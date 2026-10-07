function Mascota(nombre,especie,edad,peso) {
    this.nombre = nombre,
    this.especie = especie,
    this.edad = edad,
    this.peso = peso,

    this.presentarse = () => `El nombre de la mascota es ${this.nombre} es de la especie ${this.especie} tiene ${this.edad} años de edad y su peso es de ${this.peso}KG`
    

}

const mascota1 = new Mascota("Max", "perro",10,10);
const mascota2 = new Mascota("Paco", "pajaro",2,0.200);
const mascota3 = new Mascota("Misha","gato", 8,3);

console.log(`Mascota 1: ${mascota1.presentarse()}\nMascota 2: ${mascota2.presentarse()}\nMascota 3: ${mascota3.presentarse()}`);