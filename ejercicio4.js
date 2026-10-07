function Libro(nombre,autor,categoria, prestado = false) {
    this.nombre = nombre,
    this.autor = autor,
    this.categoria = categoria,
    this.prestado = prestado,

    this.prestar = function () {
        if(this.prestado == true){
            console.log(`EL LIBRO YA FUE PRESTADO`);
        }else{
            this.prestado = true;
       }
        
    },
    
    this.devolver = function (){
        if(this.prestado == true){
            this.prestado = false;
        }else{
            console.log("Inconsistencia encontrada");
       }
    }

}

const libro1 = new Libro("1984","George Orwell","sci-fi")
libro1.prestar();
console.log(libro1.prestado);
libro1.devolver()
console.log(libro1.prestado);