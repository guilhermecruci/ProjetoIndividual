var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/buscar-idade", function (req, res) {
    usuarioController.buscarIdade(req, res);
});

router.post("/buscar-situacao", function (req, res) {
    usuarioController.buscarSituacao(req, res);
});

router.post("/atualizar-situacao", function (req, res) {
    usuarioController.atualizarSituacao(req, res);
});


module.exports = router;