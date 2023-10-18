let button = document.querySelector("button");
let name = document.getElementById("name");
let surname = document.getElementById("name");
let phone = document.getElementById("name");
button.onclick = function () {
    let inputName = document.getElementById("fname").value;
    let inputSurname = document.getElementById("lname").value;
    let inputPhoneNumber = document.getElementById("number").value;

    document.getElementById("name").textContent = inputName;
    document.getElementById("surname").textContent = inputSurname;
    document.getElementById("phone").textContent = inputPhoneNumber;
};
