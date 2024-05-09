const { Router } = require("express");
const path = require("path");
const router = Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/home/home.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/login/login.html"));
});

router.get("/cadastro", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/cadastro/cadastro.html"));
});

module.exports = router;
