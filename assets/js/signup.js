let btn = document.querySelector("#seePassword");
let btnConfirm = document.querySelector("#seeConfirmPassword");

let name = document.querySelector("#name");
let labelName = document.querySelector("#labelName");
let validName = false;

let user = document.querySelector("#user");
let labelUser = document.querySelector("#labelUser");
let validUser = false;

let password = document.querySelector("#password");
let labelPassword = document.querySelector("#labelPassword");
let validPassword = false;

let confirmPassword = document.querySelector("#confirmPassword");
let labelConfirmPassword = document.querySelector("#labelConfirmPassword");
let validConfirmPassword = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

name.addEventListener("keyup", () => {
    if(name.value.length <= 3) {
        labelName.setAttribute("style", "color: red");
        labelName.innerHTML = "Nome *Insira no mínimo 4 caracteres";
        name.setAttribute("style", "border-color: red");
        validName = false;
    } else {
        labelName.setAttribute("style", "color: green");
        labelName.innerHTML = "Nome";
        name.setAttribute("style", "border-color: green");
        validName = true;
    }
});

user.addEventListener("keyup", () => {
    if(user.value.length <= 4) {
        labelUser.setAttribute("style", "color: red");
        labelUser.innerHTML = "Usuário *Insira no mínimo 5 caracteres";
        user.setAttribute("style", "border-color: red");
        validUser = false;
    } else {
        labelUser.setAttribute("style", "color: green");
        labelUser.innerHTML = "Usuário";
        user.setAttribute("style", "border-color: green");
        validUser = true;
    }
});

password.addEventListener("keyup", () => {
    if(password.value.length <= 5) {
        labelPassword.setAttribute("style", "color: red");
        labelPassword.innerHTML = "Senha *Insira no mínimo 6 caracteres";
        password.setAttribute("style", "border-color: red");
        validPassword = false;
    } else {
        labelPassword.setAttribute("style", "color: green");
        labelPassword.innerHTML = "Senha";
        password.setAttribute("style", "border-color: green");
        validPassword = true;
    }
});

confirmPassword.addEventListener("keyup", () => {
    if(password.value != confirmPassword.value) {
        labelConfirmPassword.setAttribute("style", "color: red");
        labelConfirmPassword.innerHTML = "Confirmar Senha *As senhas não conferem";
        confirmPassword.setAttribute("style", "border-color: red");
        validConfirmPassword= false;
    } else {
        labelConfirmPassword.setAttribute("style", "color: green");
        labelConfirmPassword.innerHTML = "Confirmar Senha";
        confirmPassword.setAttribute("style", "border-color: green");
        validConfirmPassword= true;
    }
});

function cadastrar() {
    if(validName && validUser && validPassword && validConfirmPassword) {
        let userList = JSON.parse(localStorage.getItem("userList") || "[]");
        userList.push({
            nameCad: name.value,
            userCad: user.value,
            passwordCad: password.value
        });
        localStorage.setItem("userList", JSON.stringify(userList)); 

        msgSuccess.setAttribute("style", "display: block");
        msgSuccess.innerHTML = "<strong> Cadastrando o usuário... </strong>";
        msgError.setAttribute("style", "display: none");
        msgError.innerHTML = "";

        setTimeout(() => {
            window.location.href = "../html/signin.html";
        }, 3000);
    } else {
        msgSuccess.setAttribute("style", "display: none");
        msgSuccess.innerHTML = "";
        msgError.setAttribute("style", "display: block");
        msgError.innerHTML = "<strong> Preencha todos os campos corretamente antes de cadastrar </strong>";
    }
};

btn.addEventListener("click", () => {
    let imputPassword = document.querySelector("#password");
    if(imputPassword.getAttribute("type") == "password") {
        imputPassword.setAttribute("type", "text");
    } else {
        imputPassword.setAttribute("type", "password");
    }
});

btnConfirm.addEventListener("click", () => {
    let imputConfirmPassword = document.querySelector("#confirmPassword");
    if(imputConfirmPassword.getAttribute("type") == "password") {
        imputConfirmPassword.setAttribute("type", "text");
    } else {
        imputConfirmPassword.setAttribute("type", "password");
    }
});