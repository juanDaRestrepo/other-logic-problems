function findSmallestInterval(numbers) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    console.log("ejecuytando funcion");
    arrayOrdenado=numbers.sort(function(a, b){return a - b});
    console.log(arrayOrdenado);
    var smallest=50000;
    var substraction;
   for(var i=0;i<arrayOrdenado.length;i++){
       console.log(arrayOrdenado[i]+" "+arrayOrdenado[i+1]);
       substraction=arrayOrdenado[i]-arrayOrdenado[i+1];
       console.log(substraction);
      if(substraction<0){
        substraction=substraction*-1;
        if(substraction<smallest){
            smallest=substraction;
        }
      }else{
        if(substraction<smallest){
            smallest=substraction;
        }
      }
    }
    return smallest;
   }
   
   
   

var numbers=[ 15, 98, 22, 74, 44, 72 ];
console.log(findSmallestInterval(numbers));