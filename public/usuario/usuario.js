function insereDados(nome, data_nasc, esporte_fav) {
let nomeInput = document.getElementById("nome")
let dataInput = document.getElementById("data")
let esportInput = document.getElementById("esporte")

nomeInput.value = nome
dataInput.value = data_nasc
esportInput.value = esporte_fav
}


const baseURL = "http://localhost:8080/usuario/index.html";
const user = JSON.parse(sessionStorage.getItem("user"));

async function usuario(){
    const res = await fetch(baseURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dados: user,
      }),
    });

    const data = await res.json();
    console.log(data.nome);
    insereDados(data.nome, data.data_nasc, data.esporte_fav);
    
}