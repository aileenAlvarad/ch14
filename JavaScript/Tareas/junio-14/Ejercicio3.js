       Exercise #3

 Write a program to compute the sum and product (multiplication) of an array
  of numbers. Print out the sum and the product.
  Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
  
        let numb = [1, 2, 3, 4], suma = 0, multiplicacion = 1;
for(let i=0; i<numb.length; i++){
       suma += numb[i] ; 
        multiplicacion *= numb[i] ;
  }   
console.log("suma " + suma);
console.log("multiplicacion " + multiplicacion);
  