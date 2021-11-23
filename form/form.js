let nameInput = document.querySelector("#name")
console.log(nameInput);
let nameError = document.querySelector(".nameErr")
console.log(nameError);
let surnameInput = document.querySelector("#surname")
console.log(surnameInput);
let surnameError = document.querySelector(".surnameError")
console.log(surnameError);
let emailInput = document.querySelector("#email")
console.log(emailInput);
let emailError = document.querySelector(".emailError")
console.log(emailError);
let passInput = document.querySelector("#pass")
console.log(passInput);
let repassInput = document.querySelector("#repass")
console.log(repassInput);
let passError = document.querySelector(".passError")
console.log(passError);
let btn = document.querySelector("button[type=button]")
console.log(btn);

btn.onclick = function(){

    if(!nameInput.value){
        nameError.classList.remove("d-none")
    }
    else{
        nameError.classList.add("d-none")

    }
    if(!surnameInput.value){
        surnameError.classList.remove("d-none")
    }
    else{
        surnameError.classList.add("d-none")
    }
    if(!emailInput.value){
        emailError.classList.remove("d-none")
        emailError.innerText = "Please fill out this field"
    }
    else{

        if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput.value))
        {
            emailError.classList.add("d-none")
        }
        else{
            emailError.classList.remove("d-none")
            emailError.innerText = "Please enter valid email address"

        }
    }
    if(!passInput.value){
        passError.classList.remove("d-none")
        passError.innerText="Please fill out this field"
    }
    else{
        if(passInput.value != repassInput.value){
            passError.innerText="Password does not match!"
        }
        else{
            passError.classList.add("d-none")
        }
    }

    const validation = nameInput.value && surnameInput.value && emailInput.value && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput.value) && passInput.value && passInput.value == repassInput.value

    if(validation){
        window.location.href = "https://code.edu.az";
    }

    }