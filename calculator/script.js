let x = document.getElementById("num1");
let y = document.getElementById("num2");
let result = document.getElementById("result");

function add(){
    result.innerHTML = parseInt(x.value) + parseInt(y.value);
}

function subtract(){
    result.innerHTML = parseInt(x.value) - parseInt(y.value);
}

function multiply(){
    result.innerHTML = parseInt(x.value) * parseInt(y.value);
}
