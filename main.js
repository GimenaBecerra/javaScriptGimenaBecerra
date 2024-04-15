//Iniciamos la variable de tipo let para nombrelet
let nombreLet;

//Escribir funcion saludar
function saludar () {
    //Llammamos al cartel
    nombreLet = prompt ("Ingrese su nombre")
    if (nombreLet.length === 0) {
        alert(`Ingresar un Nombre, Por Favor`) 
    }
    else{
        //cargar la variable nombreLet
        alert(`Bienvenido ${nombreLet}`);
    }
};

//Llama la funcion
saludar ();


//Cargar un arrary de nombres
var nombresArray = [ 
    `Hernan`, `Marcela`, `Margarita` , `Marcelo`, `Manuel`,
     `Agustina`, `Federico`, `Lautaro`, `Natalia`
];

//Escribirlo en la consola
console.table (nombresArray);

//Creo una variable de tipo var(generica) y le cargo la cantidad de nombres en el array
var arrayLength = nombresArray.length;

//Bucle va a buscar un nombre dentro del array
for (var i = 0; i < arrayLength; i++) {
    if(nombresArray[i] == nombreLet ){
        console.log(`El usuario ${nombreLet} pertenece a la tabla`);
        break;
    }
}



