var idade = 16;
var emancipado = false;
if(idade >18){
    console.log(`Maior de idade.`)
}else{
    if(idade <18 && emancipado ==true){
        console.log(`Menor de idade, porém emancipado, pode entrar.`);
    }else{
        console.log(`Menor de idade, não pode entrar!`);
    }
}