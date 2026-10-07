function Computador(marca,procesador,ram,precio) {
    this.marca = marca,
    this.procesador = procesador,
    this.ram = ram,
    this.precio = precio
    
}

const compu1 = new Computador("HP","intel i5 13th gen",16,3200000);
const compu2 = new Computador("Asus","AMD ryzen 7",32,600000);
const compu3 = new Computador("Apple","Chip A18 pro",8,3500000);

console.log(`El computador numero 1 es de la marca ${compu1.marca} tiene un procesador ${compu1.procesador} y cuenta con ${compu1.ram}GB de ram. Su precio es de ${compu1.precio}`); 
console.log(`El computador numero 2 es de la marca ${compu2.marca} tiene un procesador ${compu2.procesador} y cuenta con ${compu2.ram}GB de ram. Su precio es de ${compu2.precio}`); 
console.log(`El computador numero 3 es de la marca ${compu3.marca} tiene un procesador ${compu3.procesador} y cuenta con ${compu3.ram}GB de ram. Su precio es de ${compu3.precio}`); 
