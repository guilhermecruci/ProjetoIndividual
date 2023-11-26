function login() {
    var email = input_email.value;
    var senha = input_senha.value;

    if (email == "" || senha == "") {
        alert('Complete todos os dados')
        return
    }

fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        emailServer: email,
        senhaServer: senha
    })
}).then(function (resposta) {
    console.log("ESTOU NO THEN DO entrar()!");

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));
            window.localStorage.setItem('ID_USUARIO', json.idDemolay);
            window.localStorage.setItem('NOME_USUARIO', json.nome);
            setTimeout(function () {
                window.location = "./dashboard.html";
            });
        });

    } else {
        console.log("Houve um erro ao tentar realizar o login!");

        resposta.text().then(texto => {
            console.error(texto);
            //finalizarAguardar(texto);
        });
    }
}).catch(function (erro) {
    console.log(erro);
});
}