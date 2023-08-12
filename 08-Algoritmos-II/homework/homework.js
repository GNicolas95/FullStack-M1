'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return (array);
  }

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let left = [];
  let right = [];

  for ( let i = 0; i < array.length; i++) {
    if(i === pivotIndex) {
      continue;
    }

    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
    return (quickSort(left).concat([pivot], quickSort(right)));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if (array.length <= 1) {
      return array;
  }

  let pivot = Math.floor(array.length / 2);
  let left = array.slice(0, pivot);
  let right = array.slice(pivot);

  return merge(dividir(left), dividir(right));
}

function dividir(array) {
  if (array.length <= 1) {
      return array;
  }

  let pivot = Math.floor(array.length / 2);
  let left = array.slice(0, pivot);
  let right = array.slice(pivot);

  return merge(dividir(left), dividir(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
      } else {
          result.push(right[rightIndex]);
          rightIndex++;
      }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
