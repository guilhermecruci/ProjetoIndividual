
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
            } else {
                checkbox.checked = false;
            }
            console.log(situacaoAtual);
        });
    }).catch(function (erro) {
        console.log("cai no erro");
        console.log(erro);
    });
}

buscarSituacao();

function atualizarSituacao() {
    const checkbox = document.getElementById("checkbox_paramento");
    var situacao;

    if (checkbox.checked) {
        situacao = 1003;
    } else {
        situacao = 1002;
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

