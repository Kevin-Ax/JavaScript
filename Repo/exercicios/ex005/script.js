//banco de dados para a analise;
var dados = [];
var res = document.getElementById(`result`);

//função responsável por adicionar os valores no banco e na exibição ao usuário
function  adiciona(){
    //pegando os dados
    var num = document.getElementById(`number`);
    var lst = document.getElementById(`list`);
    //limpando possíveis resultados antigos;
    res.innerHTML = '';

    //verificação que algum número foi adicionado;
    if(num.value.length==0){
        window.alert(`Insira um número!`);
    }else{
        var n = Number(num.value);
        //garantindo que os elementos serão entre 0 e 100;
        if(n>0 && n<100){
            if(dados.indexOf(n)==-1){
                var item = document.createElement('option');
                item.text = `O valor ${n} foi adicionado!`;
                lst.value = `lst${n};`
                lst.appendChild(item);
                dados.push(n);
            }else{
                window.alert(`Número já inserido.`);
            }
        }else{
            window.alert(`O número inserido deve ser maior que 0 e menor que 100!`);
        }
    }
    //limpando a barra de inserção de valores;
    num.value = '';
    num.focus();
}

function analisa(){
    //limpando o resultado;
    res.innerHTML = '';
    if(dados.length==0){
        window.alert(`Primeiro coloca valores no banco de dados.`);
    }
    //ordenando o array para pegar o maior e menor número;
    dados.sort();
    var soma = 0;
    //fazendo a somatória dos elementos
    for(var cont=0;cont<dados.length;cont++){
        soma+=dados[cont];
    }
    res.innerHTML += `Ao todo, temos ${dados.length} elementos adicionados; <br>`;
    res.innerHTML += `O maior valor inserido foi ${dados[dados.length-1]};<br>`;
    res.innerHTML += `O menor valor inserido foi ${dados[0]};<br>`;
    res.innerHTML += `A soma dos elementos é ${soma}; <br>`;
    //calculando a média dos elementos;
    res.innerHTML += `A media dos elementos é ${soma/dados.length}; <br>`;
}