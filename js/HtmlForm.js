const text = document.querySelector("#text");
const textError = document.querySelector(".text-error");
text.addEventListener("input", function () {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(text.value)) textError.textContent = "";
    else textError.textContent = "Name is Incorrect";
});

const pwd = document.querySelector("#pwd");
const pwdError = document.querySelector(".pwd-error");
pwd.addEventListener("input", function () {
    let passwordRegex = RegExp(
        "^(?=.*\\d)(?=.*[A-Z])(?=.*\\W)(?!.*\\W\\w*\\W)(?!.*\\s).{8,}$"
    );
    if (passwordRegex.test(pwd.value)) pwdError.textContent = "";
    else pwdError.textContent = "Password is Incorrect";
});

const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
email.addEventListener("input", function () {
    let emailRegex = RegExp(
        "^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$"
    );
    if (emailRegex.test(email.value)) emailError.textContent = "";
    else emailError.textContent = "Email is Incorrect";
});

const tel = document.querySelector("#tel");
const telError = document.querySelector(".tel-error");
tel.addEventListener("input", function () {
    let telRegex = RegExp("(([0-9]{2})?)[ ][0-9]{10}");
    if (telRegex.test(tel.value)) telError.textContent = "";
    else telError.textContent = "Mobile No is Incorrect";
});

const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener("input", function () {
    output.textContent = salary.value;
});