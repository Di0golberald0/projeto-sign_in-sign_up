let btn = document.querySelector(".fa-eye");

btn.addEventListener("click", () => {
    let imputPassword = document.querySelector("#password");

    if(imputPassword.getAttribute("type") == "password") {
        imputPassword.setAttribute("type", "text")
    } else {
        imputPassword.setAttribute("type", "password")
    }
});

function entrar() {
    let user = document.querySelector("#user");
    let userLabel = document.querySelector("#userLabel");

    let password = document.querySelector("#password");
    let passwordLabel = document.querySelector("#passwordLabel");

    let msgError = document.querySelector("#msgError");
    let userList = [];
    let userValid = {
        name: null,
        user: null,
        password: null
    }

    userList = JSON.parse(localStorage.getItem("userList"));
    
    userList?.forEach((item) => {
        if(user.value === item.userCad && password.value === item.passwordCad) {
            userValid = {
                name:item.nameCad,
                user: item.userCad,
                password: item.passwordCad
            }
        }
    });

    if(user.value === userValid.user && password.value === userValid.password) {
        window.location.href = "../../index.html";

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        localStorage.setItem("token", token);

        localStorage.setItem("userLogin", JSON.stringify(userValid));

    } else {
        userLabel.setAttribute("style", "color: red");
        user.setAttribute("style", "border-color: red");
        passwordLabel.setAttribute("style", "color: red");
        password.setAttribute("style", "border-color: red");
        msgError.setAttribute("style", "display: block");
        msgError.innerHTML = "Usuário ou  senha incorretos";
        user.focus()
    }
};