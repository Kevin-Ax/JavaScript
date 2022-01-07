function parOuImpar(numero){
    if(numero%2==0){
        return true;
    }else{
        return false;
    }
}

function exponential(number1=1, number2=1){
    var resl=1;
    for(var cont=0;cont<number2;cont++){
        resl*=number1;
    }
    return resl;
}

//função fatorial
function fatorial(number){
    if(number==1){
        return number;
    }else{
        return number * fatorial(number-1);
    }
}

//verificação de numeros pares
var numbers = [1,2,3,4,5,6,7,8,9,10];
for(var pos in numbers){
    if(parOuImpar(numbers[pos])){
        console.log(`O elemento na posição${pos} é par! O número é ${numbers[pos]}.`);
    }else{
        console.log(`O elemento na posição${pos} é impar! O número é ${numbers[pos]}.`);
    }
}

//potência de números....
var n1 = 5;
var n2 = 3;
var result=exponential(n1,n2);
console.log(result);
console.log(fatorial(n1));