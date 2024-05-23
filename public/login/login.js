function pegaDados(){
    let email = document.getElementById("email").value; 
    let senha = document.getElementById("senha").value; 

    let dados={
        dadosLogin:{
            email:email,
            senha: senha,
        },
    };
    return dados;
}


const baseURL = "http://localhost:8080/login/index.html";

async function login(){
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
    const data =  await res.json()
    if (dadosEC.dadosLogin.email == data.email && dadosEC.dadosLogin.senha == data.senha){
        alert("Bem vindo " + data.nome)
        sessionStorage.setItem("user", JSON.stringify(data))
        window.location.href = "http://localhost:8080/";
    } else {
        alert("Usuário não encontrado")
    }

    
}