     Exercise #2
Write a function that:
  •	Takes in an array of numbers.
  •	Doubles the value of each number in the array.
  •	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

let arreglo = [1, 2, 4, 5];
for(let i=0; i<arreglo.length; i++){
  arreglo[i] = arreglo[i] * 2;
  } 

for(let i=0; i<arreglo.length; i++){
  console.log(" posicion"+ " "+i+ " resultado " + arreglo[i]);
  } 