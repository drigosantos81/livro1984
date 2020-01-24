function enviar() {
    var nomeValue = document.getElementById('nomeTxt').value;
    var emailValue = document.getElementById('emailTxt').value;
    var timestamp = new Date().getTime();

    // A variavel database vai receber as funções de acesso ao banco de dados
    var database = firebase.database();
    database.ref(timestamp).set({
        nome: nomeValue,
        email: emailValue        
    });
    
}