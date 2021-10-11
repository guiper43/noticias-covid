function enviada() {
    // criada as variaveis que armazenam o valor do campo
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    //se os campos estiverem limpos a mensagem não é exibida.
    if (nome == "" || email == "" || msg == "") {
        return false;
    } else {
        //campos preenchhidos mensagem acionada.
        alert("mensagem enviada.");
    }
}