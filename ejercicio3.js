function Estudiante(nombre,clase,nota) {
    this.nombre = nombre,
    this.clase = clase,
    this.nota = nota,
    this.aprobado = nota >= 3.0,

    this.mostrarResultado = function () {
        console.log(`El estudiante ${this.nombre} de la clase ${this.clase} aprobó? = ${this.aprobado}`);
        
    };

}

const estudiante1 = new Estudiante("Leo","A1",3.2)
estudiante1.mostrarResultado();
const estudiante2 = new Estudiante("Julian","A2",2.9)
estudiante2.mostrarResultado();
const estudiante3 = new Estudiante("Mari","A1",1.5)
estudiante3.mostrarResultado();
const estudiante4 = new Estudiante("Esteban","A3",5)
estudiante4.mostrarResultado();
