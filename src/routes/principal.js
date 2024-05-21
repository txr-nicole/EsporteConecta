const { Router } = require("express");
const dao = require("../bd/dao");
const path = require("path");
const router = Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/home/home.html"));
});

router.get("/login/login.html", (req, res) => {
  // res.json({resultado: dao.getUserByLogin(dados, function(results){
  //   console.log(results);
  // })})
});

router.post("/login/index.html", (req, res) => {
  const { dados } = req.body;
  let sql = {
    email: dados.dadosLogin.email,
    senha: dados.dadosLogin.senha,
  };
  dao.getUserByLogin(dados.dadosLogin.email, function (results) {
    console.log(results);
  });
});

router.post("/cadastro/cadastro.html", (req, res) => {
  const { dados } = req.body;
  let sql = {
    nome: dados.dadosBasicos.nome,
    data_nasc: dados.dadosBasicos.dtnascimento,
    esporte_fav: dados.dadosBasicos.esporte,
    tipo_sanguineo: dados.dadosBasicos.tpsangue,
    logradouro: dados.endereco.logradouro,
    numero: dados.endereco.numero,
    cep: dados.endereco.cep,
    complemento: dados.endereco.complemento,
    bairro: dados.endereco.bairro,
    cidade: dados.endereco.cidade,
    email: dados.dadosLogin.email,
    senha: dados.dadosLogin.senha,
  };
  console.log(sql);
  dao.addUser(sql, function (results) {
    console.log(results);
  });
});

module.exports = router;
