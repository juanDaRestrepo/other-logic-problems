
var numeroChika = window.prompt("Ingrese el numero propuesto por Chika");
var numerosYuki=window.prompt("Numeros de yuki:deben ser dos numeros separados por comas que sumados den el numero propuestop por Chika");

var arrayYuki=numerosYuki.split(",");
console.log(arrayYuki);
var sumaNumerosYuki=0;

for(var i=0;i<arrayYuki.length;i++){
    
    sumaNumerosYuki=sumaNumerosYuki+parseInt(arrayYuki[i]);

    
}
console.log(sumaNumerosYuki);
while(sumaNumerosYuki!=numeroChika){
    alert("La suma de los numeros ingresados no son iguales al numero propuesto por Chika");
    var numeroChika = window.prompt("Ingrese el numero propuesto por Chika");
    var numerosYuki=window.prompt("Numeros de yuki:deben ser dos numeros separados por comas que sumados den el numero propuestop por Chika");
    var arrayYuki=numerosYuki.split(",");
    console.log(arrayYuki);
    var sumaNumerosYuki=0;

    for(var i=0;i<arrayYuki.length;i++){
    
     sumaNumerosYuki=sumaNumerosYuki+parseInt(arrayYuki[i]);

    
    }
    console.log(sumaNumerosYuki);
}

var numeroAyuki=arrayYuki[0];
var numeroByuki=arrayYuki[1];

var sumaAvellanasA=0;
var sumaAvellanasB=0;
var sumaAvellanas=0;

if(numeroAyuki==1){
    sumaAvellanasA=1;
}else if(numeroAyuki==0){
    sumaAvellanasA=0;
}else{
    console.log("llgue hasta aqui primer while ultima comprobacion");
    while(numeroAyuki/2!=1){
        if(numeroAyuki%2==1){
            sumaAvellanasA++;
        }  
        numeroAyuki=Math.floor(numeroAyuki/2);  
        if(numeroAyuki==1){
            break;
        }
    }
    sumaAvellanasA++;
}

if(numeroByuki==1){
    sumaAvellanasB=1;
}else if(numeroByuki==0){
    sumaAvellanasB=0;
}else{
    console.log("llgue hasta aqui segundo while ultima comprobacion");
    while(numeroByuki/2!=1){
        if(numeroByuki%2==1){
            sumaAvellanasB++;
        } 
        numeroByuki=Math.floor(numeroByuki/2);
        console.log(numeroByuki);
        if(numeroByuki==1){
            break;
        } 
    }
    sumaAvellanasB++;
}

sumaAvellanas=sumaAvellanasA+sumaAvellanasB;

console.log("Las avellanas que le dara chika a Yuki seran:"+sumaAvellanas);