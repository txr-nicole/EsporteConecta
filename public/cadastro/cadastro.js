function pegaDados(){
    let nome = document.getElementById("nome").value;
    let dtnascimento = document.getElementById("dtnascimento").value; 
    let esporte = document.getElementById("esporte").value; 
    let tpsangue = document.getElementById("tpsangue").value; 
    let endereco = document.getElementById("endereco").value; 
    let numero = document.getElementById("numero").value; 
    let cep = document.getElementById("cep").value; 
    let complemento = document.getElementById("complemento").value; 
    let bairro = document.getElementById("bairro").value; 
    let cidade = document.getElementById("cidade").value; 
    let email = document.getElementById("email").value; 
    let senha = document.getElementById("senha").value; 

    let dados={
        dadosBasicos:{
            nome: nome,
            dtnascimento: dtnascimento,
            esporte: esporte,
            tpsangue: tpsangue,
        },
        endereco:{
            logradouro: endereco,
            numero: numero,
            cep: cep,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
        },
        dadosLogin:{
            email:email,
            senha: senha,
        },
    };

    return dados;

}


const baseURL = "http://localhost:8080/cadastro/cadastro.html";

async function cadastro(){
    const dadosEC = pegaDados()
    const res = await fetch(baseURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            dados: dadosEC
        })
    })
}