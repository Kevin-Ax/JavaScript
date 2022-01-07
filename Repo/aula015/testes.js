/*
let num = [1,2,3,4,5,6,7];
for(var i = 0;i<num.length;i++){
    console.log(num[i]);
    //console.log(i);
}

num[3]=10;

for(var i = 0;i<7;i++){
    console.log(num[i]);
    //console.log(i);
}

for(var i = 8;i<20;i++){
    num.push(i);
}

console.log(`O array é ${num}!`);
console.log(`O tamanho do array é ${num.length}!`);

/*esse sort bugou ??
let sorted = [12,5,7,82,95,44,632,100,58];
console.log(`O array ordenado é ${sorted.sort()}!`);

//não funciona
//console.log(`Na ultima posição, o elemento é ${num[num.length]}`);
*/
let teste = [1,5,8,4,6,3];
teste.sort();
console.log(teste);

//simplificação de loop para arrays
for (var pos in teste){
    console.log(`A posição ${pos} tem o elemento ${teste[pos]}!`);
}

//Busca por elementos num array
let busca = [];
busca.push(teste.indexOf(8));
busca.push(teste.indexOf(3));
busca.push(teste.indexOf(5));
busca.push(teste.indexOf(22));

for (var pos in busca){
    if(busca[pos]!=-1){
        console.log(`A chama do primeiro elemento pesquisado é ${busca[pos]} !`)
    }else{
        console.log(`O elemento pesquisado não existe!`);
    }
}

console.log(teste.indexOf(3));