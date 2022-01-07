
function verificar(){
    var ano = window.document.getElementById("ano");
    var gen = window.document.getElementsByName(`radsex`);
    var res = window.document.getElementById(`result`);

    var numAno = Number(ano.value);
    var data = new Date();
    var anoAtual = data.getFullYear();
    var idade = anoAtual - numAno;

    //criando elementos dinamicamente
    /*
    var img = document.createElement('img');
    img.setAtribute('id','foto');
    Dessa forma, cria um elemento do tipo imagem no html, e seta seu id para 'foto', para que possamos utilizá-lo;
    para fazer aparecer, usamos o res (pq é a tag do resultado escolhida). appendChild(img), que colocaria a img que setamos dinamicamente para aparecer;
    */ 
    //formatação da imagem 
    //Foi feito usando CSS pois não possuo um editor de fotos, mas é incorreto fazer dessa fora.
    var img = document.createElement('img');
    img.setAttribute('id','foto');
    img.style.width = '250px';
    img.style.height = '250px';
    //garantindo que o ano de nascimento inserido seja válido;
    if(ano.value.length == 0 || ano.value > anoAtual){
        window.alert(`Verifique os dados e tente novamente!`)
    }else{
        //Fazendo a leitura da idade e dando os resultados de acordo com a idade calculada;
        if(gen[0].checked){
            if(idade < 9){
                res.innerText = `Detectamos um homem com ${idade} anos.`;
                img.setAttribute('src','menino.jpg');
            }else if(idade < 20){
                res.innerText = `Detectamos um homem com ${idade} anos.`;
                img.setAttribute('src','adolescenteH.jpg');
            }else if(idade < 55){
                res.innerText = `Detectamos um homem com ${idade} anos.`;
                img.setAttribute('src','homem.jpg');
            }else{
                res.innerText = `Detectamos um homem com ${idade} anos.`;
                img.setAttribute('src','velinho.jpg');
            }
        }else{
            if(idade < 9){
                res.innerText = `Detectamos um mulher com ${idade} anos.`;
                img.setAttribute('src','menina.jpg');
            }else if(idade < 20){
                res.innerText = `Detectamos um mulher com ${idade} anos.`;
                img.setAttribute('src','adolescenteM.jpg');
            }else if(idade < 55){
                res.innerText = `Detectamos um mulher com ${idade} anos.`;
                img.setAttribute('src','mulher.jpg');
            }else{
                res.innerText = `Detectamos um mulher com ${idade} anos.`;
                img.setAttribute('src','velinha.jpg');
            }
        }
        res.appendChild(img);
    }
}