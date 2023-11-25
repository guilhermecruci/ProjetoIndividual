function logar() {

    var nomeVar = input_nome.value;
    var emailVar = input_email.value;
    var confirmaEmailVar = input_confirmaEmail.value;
    var cpfVar = input_cpf.value
    var senhaVar = input_senha.value;
    var confirmacaoSenhaVar = input_confirmaSenha.value
    if (
        nomeVar == "" ||
        emailVar == "" ||
        confirmaEmailVar == "" ||
        cpfVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == "") {
        alert('Apresentar Dados Válidos')
    }
    else if (nomeVar.length < 2) {
        alert("Muito curto para ser um nome, não acha ?");
    } else if (emailVar != confirmaEmailVar) {
        alert("Vamos concordar que o E-mail não está igual");
    } else if (senhaVar > 6) {
        alert("Pensa em uma senha maior!!!");
    } else if (confirmacaoSenhaVar != senhaVar) {
        alert("confirmação de senha não está igual a senha");
    } else if (cpfVar.length != 11) {
        alert("cpf só os números viu!");
    } else {
        window.location.href = "./login.html"
    }

}

