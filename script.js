function carregar () {
    var img = window.document.getElementById('imagem');
    var currentTime = new Date().getHours(); 

    //var currentTime = data.getHours()
    if(currentTime >= 0 && currentTime < 12) {
        //BOM DIA
        document.body.background = "imagens/manha.jpg";
        

    } else if (currentTime >= 12 && currentTime <= 18) {
        //BOA TARDE
        document.body.background = "imagens/tarde.jpg";

    } else {
        //BOA NOITE
        document.body.background = "imagens/noite.jpg";
    }
}