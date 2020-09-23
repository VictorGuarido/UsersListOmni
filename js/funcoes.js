function bloquear(cod) {

    var icone = "<img src='https://www.bizfacil.com.br/imagens/cadeado.gif'>"

    var bloqStatus = document.getElementsByName("status" + cod)[0];

    var statusAtual = (bloqStatus.innerHTML);

    console.log(statusAtual);

    var respostaUsuario = confirm("Deseja " + (statusAtual == "Ativo" ? "Bloquear" : "desbloquear") 
    + " o usuário?");

    console.log(respostaUsuario);
    
    if(respostaUsuario){

        bloqStatus.innerHTML = (statusAtual == "Ativo" ? "Bloqueado " + icone : "Ativo")
    }

}
   

function salvar(){

    var logCad      = document.getElementById("cad-login");

    var nameCad     = document.getElementById("cad-nome");

    var dataCad     = document.getElementById("cad-data");

    var generoCad   = document.getElementsByName("genero");

    var emailCad    = document.getElementById("cad-email");
     
    var statusCad   = document.getElementById("cad-status");

    var bloqCad     = document.getElementById("cad-bloq");

    var obsCad      = document.getElementById("cad-obs");

    for (var i in  generoCad) {

        if (generoCad[i].checked) {
            generoValue = generoCad[i].value;

            console.log(generoValue);
          }
    }
    
    var tabelaUsuarios = localStorage.getItem("usuario");
    tabelaUsuarios = JSON.parse(tabelaUsuarios);

    if(tabelaUsuarios == null){
        
        tabelaUsuarios = [];
    }

    var pessoa = {

        login     : logCad.value,
        nome      : nameCad.value,
        data      : dataCad.value,
        genero    : generoValue,
        email     : emailCad.value,
        status    : statusCad.value,
        bloqueado : bloqCad.value,
        observacao: obsCad.value
    }

    tabelaUsuarios.push(pessoa);

    localStorage.setItem("usuario" , JSON.stringify(tabelaUsuarios));

    console.log(JSON.stringify(tabelaUsuarios));


    

         logCad.value       = "";
         nameCad.value      = "";
         dataCad.value      = "";
         generoValue        = "";
         emailCad.value     = "";
         statusCad.value    = "";
         bloqCad.value      = "";
         obsCad.value       = "";
    

}


