// JavaScript Program to Find the Largest Among Three Numbers

let form = document.querySelector("form")
let first = document.getElementById("first")
let second = document.getElementById("second")
let third = document.getElementById("third")
let smaller = document.getElementById("smaller")


function checkSmall(e) {
    e.preventDefault()

    let num1 = first.value
    let num2 = second.value
    let num3 = third.value

    if (num1 <= num2 && num1 <= num3) {
        smaller.value=num1
    }

    else if (num2 <= num1 && num2 <= num3) {
        smaller.value=num2
    }

    else if (num3 <= num1 && num3 <= num2) {
        smaller.value=num3
    }

}
form.addEventListener("submit", checkSmall)
