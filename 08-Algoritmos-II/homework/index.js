"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //  [ 7 , 2 , 8 , 5 , 3 , 9 , 4  ]
  //
  //  if([1]) => devuelvo el array
  // let pivote = Math.random() --->>> chequen que el valor del indice este dentro del array
  // recorrer el array i < pivote lo mando a la izq[] si i > pivote lo mando a la derecha[]
  //             [1]          [1]
  // quickSort(izq)   quickSort(der)
  // return el array ordenado
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //okey probemos ahora
  //  [ 7 , 2 , 8 , 5 , 3 , 9 , 4  ]
  // if( [1] ) => return array
  // dividir([])
  //  izq[]    |    der[]
  /// merge(  mergeSort(izq[]), mergeSort(der[]) )
}

function dividir(array) {
  // parte a la mitad
  // devuelve izq y la derecha
}

function merge(izq, der) {
  // compara ambos
  // izq[]  < o >  der[]
  //los concatena pero en orden
  //[ ordenado ]
}

// haganlo por separado

let array = [7, 2, 8, 5, 3, 9, 4];

// dividir(arr)=> []  []

let array1;
let array2;

//merge(array1,array2) => [ordenado]

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};