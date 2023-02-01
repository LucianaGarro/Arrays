//**Arrays/arreglos */

//¿Qué es un Array?
//Es un tipo de dato que sirve para almacenar valores en forma de lista. Sería como una colección de variables.

//Sintaxis:

let array = [1,2,3];
console.log(array);

let arrayVacio = [];
console.log("Array vacío: ");
console.log(arrayVacio);

//Puedo ir agregando valores a un array después de declararlo:
//No le ponemos let porque nos va a dar error en consola porque está declarado más arriba:
arrayVacio = [25,90,30];
console.log("Agrego elementos a mi array vacío : ");
console.log(arrayVacio);

//¿Los array son siempre Number? No, se puede almacenar cualquier tipo de dato. 

let arrayCombinado = ["Hola",99,false];
console.log(arrayCombinado);

//Para poder organizarnos mejor, los elementos de un array van a tener un elemento índice que los va a identificar
//Comienza del número 0, hasta el último  de un array. 

const arrayLetras = ["A", "B", "C", "D"];
console.log("Array de letras : ");
console.log(arrayLetras);

//¿Cómo hago para mostrar un elemento específico del array?
//para esto voy a utilizar el índice.

console.log(arrayLetras[2]);

//¿Puedo modificar un elemento específico del array? SI

arrayLetras[2] = 100;
console.log(arrayLetras);

//¿Puedo recorrer un array? SI
//¿Cómo? si queremos recorrer un array y acceder a cada elemento de forma individual vamos a utilizar un bucle/ciclo. Por lo general el más usado es el FOR.

// for (let i = 0; i<arrayLetras.length; i++){
//     alert(arrayLetras [i]);
// }

//** Métodos más comunes */

//1) método PUSH: me permite agregar elementos AL FINAL del array.

let familia = ["Luciana", "Eduardo", "Elsa", "Alejandro"];
console.log(familia);

console.log("Agregar a mi gata : ");
familia.push("Gala");
console.log(familia);

//2)método unshift() : es cuando quiero agregar un elemento al COMIENZO del array

familia.unshift("Pelusa");
console.log(familia);

//3)Método pop() : me va a permitir ELIMINAR el ÚLTIMO elemento del array.

familia.pop();
console.log("Sacamos el último integrante del array : ");

//4) Método shift() : me permite eliminar el PRIMER  elemento del array

let eliminadoShift = familia.shift();
console.log(familia);
console.log("Eliminamos al primer integrante: " + eliminadoShift);

//4)Método splice () : me permite eliminar uno o varios elemento de un array.
//funciona con DOS parámetros: el primero va a ser el índice y el segundo va a ser la cantidad de veces que tiene que eliminar el elemento. 

["Luciana", "Eduardo", "Elsa", "Alejandro"];

let integrantesEliminados = familia.splice(2,2);
console.log(familia);
console.log(integrantesEliminados);

//5) Método JOIN: me permite generar un string con todos los elementos del array
//le paso un un valor por parámetro y ese valor es el elemento que separa

let stringFamilia = familia.join(" # ");
console.log("Método Join: ");
console.log(stringFamilia);

//6) Metodo concat (): me va a permitir unir dos arrays, retornando uno nuevo.

let familiaUnida = familia.concat(integrantesEliminados);
console.log("Método concat : ");
console.log(familiaUnida);

//7)  Método slice () : me retorna una copia del array. Puedo especificar qué índice de elemntos copie.
//Le voy pasar por parámetros un valor de inicio y uno de final(OJO QUE EL FINAL NO LO INCLUYE)

let slice = familiaUnida.slice(0,2);
console.log("Método slice : ");
console.log(slice);

//8) Método IndexOF ():me retorna un índice (posición) de un elemento. 

let indiceLuciana = familiaUnida.indexOf("Eduardo");
console.log("El indice de luciana es : " + indiceLuciana);

//9) Método Includes () - Similar a IndexOF, solo que retorna un booleano si es que lo encuentra.

let booleano = familiaUnida.includes("Mariana");
console.log("Booleano si encuentra a Luciana " + booleano);

//9) Método Reverse () : invierte los elementos de un array
//es llamado el método destructivo, porque modifica al array original.

console.log("Método reverse: ");
console.log(familiaUnida);
familiaUnida.reverse();
console.log(familiaUnida);





