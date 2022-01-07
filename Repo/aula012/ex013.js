var now = new Date();
var dayWeek = now.getDay();
//var dayWeek = 12;
switch(dayWeek){
    case 0: 
        console.log(`É domingo!`);
        break;
    case 1: 
        console.log(`É segunda!`);
        break;
    case 2: 
        console.log(`É terça!`);
        break;   
    case 3: 
        console.log(`É quarta!`);
        break;
    case 4: 
        console.log(`É quinta!`);
        break;
    case 5: 
        console.log(`É sexta!`);  
        break;
    case 6:
        console.log(`É sabado!`)
        break;
    default:
        console.log('Dia não existe!');
        break;
}