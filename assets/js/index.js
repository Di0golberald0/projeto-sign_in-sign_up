if(localStorage.getItem("token") == null){
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "./assets/html/signin.html"; 
};
  
let userLogado = JSON.parse(localStorage.getItem("userLogin"));
  
let logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.name}`;
  
function sair(){
    localStorage.removeItem("token");
    localStorage.removeItem("userLogin");
    window.location.href = "./assets/html/signin.html"; 
};