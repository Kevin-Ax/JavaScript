function contar(){
    //Colhimento dos dados
    var beg = document.getElementById('begin');
    var end = document.getElementById('end');
    var walk = document.getElementById('walker');
    var res = document.getElementById('result');

    //tratamentos de dados para prevenção de erros do programa
    if(beg.value.length==0 || end.value.length==0 || walk.value.length==0){
        window.alert(`Preencha todo o formulário para realizar a contagém!!`)
    }else{
        if(Number(walk.value<=0)){
            res.innerText = `Impossivel contar!`;
            window.alert(`Impossível contr com passo 0 ou menor, considerando passo igual a 1!`);
            walk = 1;
        }else{
            walk = Number(walk.value);  //tratamento do walk, para que os loops possam operar sem a utilização da função 'Number()'; 
        }//para tratatar de casos de subtração de números
        if(Number(beg.value) > Number(end.value)){
            res.innerText = `Contando: `
            for(var cont=Number(beg.value);cont>=Number(end.value);cont-=walk){
                res.innerText += ` ${cont} \u{23E9}`
            }
        }else{  //Caso de soma padrão
            res.innerText = `Contando: `
            for(var cont=Number(beg.value);cont<=Number(end.value);cont+=walk){
                res.innerText += ` ${cont} \u{23E9}`;
            }
        }
        res.innerText += ' \u{274E}';
    }
}