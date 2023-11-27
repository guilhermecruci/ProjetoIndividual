
function buscarSituacao() {
    fetch("/usuarios/buscar-situacao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeUsuario: window.localStorage.getItem("NOME_USUARIO")
        })
    }).then(function (resposta) {
        resposta.json().then(json => {
            const situacaoAtual = json[0].fkSituacao;
            const checkbox = document.getElementById("checkbox_paramento");
            if (situacaoAtual === 1003) {
                checkbox.checked = true;
                span_cargo.innerHTML = `Ativo`
            } else {
                checkbox.checked = false;
                span_cargo.innerHTML = `Inativo`
            }
            console.log(situacaoAtual);
        });
    }).catch(function (erro) {
        console.log(erro);
    });
}

buscarSituacao();

function atualizarSituacao() {
    const checkbox = document.getElementById("checkbox_paramento");
    var situacao;

    if (checkbox.checked) {
        situacao = 1003;
        span_cargo.innerHTML = "Ativo"
    } else {
        situacao = 1002;
        span_cargo.innerHTML = "Inativo"
    }

    fetch("/usuarios/atualizar-situacao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            situacao: situacao,
            nomeUsuario: window.localStorage.getItem("NOME_USUARIO")
        })
    }).then(function (resposta) {
        console.log(resposta);
        resposta.json().then(json => {
            console.log(json);
        });
    }).catch(function (erro) {
        console.log(erro);
    });
}

