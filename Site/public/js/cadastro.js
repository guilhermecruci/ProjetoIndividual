function registrar() {

    var nomeVar = input_nome.value;
    var emailVar = input_email.value;
    var confirmaEmailVar = input_confirmaEmail.value;
    var idadeVar = Number(input_idade.value);
    var senhaVar = input_senha.value;
    var confirmacaoSenhaVar = input_confirmaSenha.value
    console.log(idadeVar);
    if (
        nomeVar == "" ||
        emailVar == "" ||
        confirmaEmailVar == "" ||
        idadeVar == "" ||
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
    } else {
        window.location.href = "./login.html"
    }

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            idadeServer: idadeVar
        }),
    })
}