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
}