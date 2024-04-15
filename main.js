//Cargar un arrary de nombres
var nombresArray = [
    `Hernan`, `Marcela`, `Margarita`, `Marcelo`, `Manuel`,
    `Agustina`, `Federico`, `Lautaro`, `Natalia`
];

//Creo una variable de tipo var(generica) y le cargo la cantidad de nombres en el array
var arrayLength = nombresArray.length;

//Iniciamos la variable de tipo let para nombrelet
let nombreLet;

//Escribir funcion saludar
function saludar() {
    //Llammamos al cartel
    nombreLet = prompt("Ingrese su nombre")
    if (nombreLet.length === 0) {
        alert(`Ingresar un Nombre, Por Favor`)
    }
    else {
        //Bucle va a buscar un nombre dentro del array
        for (var i = 0; i < arrayLength; i++) {
            if (nombresArray[i] == nombreLet) {
                //El usuario pertenece a la tabla;
                alert(`Bienvenido ${nombreLet}`);
                break;
            }
            //El usuario no pertenece a la tabla;
            if (nombresArray[i] !== nombreLet) {
                alert(`Nombre no registrado`);
                break;
            }
        }

    }
};

//Llama la funcion
saludar();




//Escribirlo en la consola
console.table(nombresArray);








