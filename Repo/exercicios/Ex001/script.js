function carregar(){
    //coleta de dados
    var msg = window.document.getElementById('hora');
    var img = window.document.getElementById('imagem');
    //coleta da hora atual;
    var data = new Date();
    var hora = data.getHours();
    msg.innerText = `Agora são ${hora} horas.`
    //mudando a página de acordo com a hora do dia;
    if(hora > 0 && hora <= 5){
        //madruga
        img.src = 'madrugada.jpg';
        document.body.style.background = '#447791';
    }else if(hora > 5 && hora <= 12 ){
        //manhã
        img.src = 'manha.jpg';
        document.body.style.background = '#03bb85 ';
    }else if(hora > 12 && hora <= 18 ){
        //tarde
        img.src = 'tarde.jpg';
        document.body.style.background = '#daa520  ';
    }else{
        //noite
        img.src = 'noite.jpg';
        document.body.style.background = '#191970  ';
    }
}