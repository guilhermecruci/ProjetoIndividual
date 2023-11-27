var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefinida!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var idade = req.body.idadeServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (idade == undefined) {
        res.status(400).send("Sua senha está undefined");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, idade)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarIdade(req, res) {
    usuarioModel.buscarIdade()
        .then((response) => {
            console.log(response);
            res.json(response);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json(erro.sqlMessage);
        })
}

function buscarSituacao(req, res) {
    const nomeUsuario = req.body.nomeUsuario;
    usuarioModel.buscarSituacao(nomeUsuario)
        .then((response) => {
            console.log(response);
            res.json(response);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json(erro.sqlMessage);
        })
}

function atualizarSituacao(req, res) {
    const situacao = req.body.situacao;
    const nomeUsuario = req.body.nomeUsuario;
    usuarioModel.atualizarSituacao(situacao, nomeUsuario)
        .then((response) => {
            console.log(response);
            res.json(response);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json(erro.sqlMessage);
        })
}

module.exports = {
    autenticar,
    cadastrar,
    buscarIdade,
    buscarSituacao,
    atualizarSituacao
}