const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

//error function
function error(input, msg) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerHTML = msg;
}
//success function
function success(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
//input validation function
function inputValidation(inputArray) {
    inputArray.forEach(e => {
        if (e.value.trim() === '') {
            error(e, `${e.id} is required`);
        }
        else {
            success(e);
        }
    });
}
//check name
function checkName(input, min, max) {
    if (input.value.length < min) {
        error(input, `Username must be at least ${min} characters`)
    }
    else if (input.value.length > max) {
        error(input, `Username must be less than ${max} characters`)
    }
}
//check email
function checkEmail(input) {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(input.value)) {
        success(input);
    }
    else if (input.value === '') {
        error(input, "Email is required");
    }
    else {
        error(input, "Email is not valid");
    }
}
//check password
function checkPassword(input) {
    let pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    //console.log(input.value)
    if (pattern.test(input.value)) {
        success(input);
    }
    else if (input.value.trim() === '') {
        error(input, `Password is required`)
    }
    else {
        error(input, "Password is not valid");
    }
}
//same password or not
function samePassword(p1, p2) {
    if (p1.value !== p2.value) {
        if (p2.value === '') {
            error(p2, "Password is required")
        }
        else {
            error(p2, "Password is not matched");
        }
    }
}
//form eventlistener
form.addEventListener("submit", function (e) {
    e.preventDefault();
    //console.log("hey!");
    inputValidation([name, email, password, repassword]);
    checkName(name, 3, 20);
    checkEmail(email);
    checkPassword(password);
    samePassword(password, repassword);
})