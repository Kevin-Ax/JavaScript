var now = new Date();
var hour = now.getHours();
console.log(`Agora são ${hour} horas`);
if(hour <= 5){
    console.log(`Boa madruga, meu rei!`);
}else if (hour <= 12){
    console.log(`bom dia!`);
}else if(hour <=18){
    console.log(`boa tarde, meu bom!`);
}else if(hour <=24){
    console.log(`boa noite!`);
}