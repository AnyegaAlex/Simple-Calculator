let num1 = 5
let num2 = 5

document.getElementById("num1_el").innerHTML = num1
document.getElementById("num2_el").innerHTML = num2
document.getElementById("sum_el")

function add(){
  let result = num1+num2
  sum_el.innerHTML = "SUM :" + result
}

function subtract(){
  let result = num1-num2
  sum_el.innerHTML = "Subtraction :" + result
}

function divide(){
  let result = num1/num2
  sum_el.innerHTML = "Division :" + result
}

function multiply(){
  let result = num1*num2
  sum_el.innerHTML = "Multiplication :" + result
}
