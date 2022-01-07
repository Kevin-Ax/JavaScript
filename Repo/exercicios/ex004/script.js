function Tabuada(){
    var num = document.getElementById(`number`);
    var tabu = document.getElementById('tab');
    //garantia que será inserido um número;
    if(num.value.length==0){
        window.alert(`Digite um número!`);
    }else{
        //calculo e apresentação da tabuada ao usuário;
        var number = Number(num.value);
        tabu.innerHTML = '';
        for(var cont=1;cont<=10;cont++){
            var item = document.createElement('option');
            item.text = `${number} * ${cont} = ${number*cont}`;
            tabu.value = `tabu${cont}`;
            tabu.appendChild(item);
        }
    }
}