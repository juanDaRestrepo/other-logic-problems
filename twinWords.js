function isTwin(a, b) {
    var arrayA=a.split("");
    var arrayB=b.split("");
    
    var sizeB=arrayB.length;
    var countA=0;
    
    for(var i=0;i<arrayA.length;i++){
        if(arrayB.includes(arrayA[i])){
            countA++;
        }
    }
    if(countA==sizeB){
        return true;
    }else{
    return false;
    }
}
console.log(isTwin("colop","roloc"));
console.log("i made a change to make teh practice of git");
console.log("i made a change a second line");