"use strict"

const buttons = document.querySelector('.buttons')
const display = document.querySelector('.display')

let numbers = []
let operators = []

for (let i = 0; i < 10; i++) {
  let button = document.createElement('button')
  button.classList.add('number')
  button.textContent = `${i}`
  button.setAttribute('id', `${i}`)

  buttons.appendChild(button)
}

const numberButton = document.querySelectorAll('.number')

numberButton.forEach((number) => {
  number.addEventListener('click', (e) => {
    numbers.push(number.id)
    display.innerHTML = `${number.id}`
  })
})

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(operator, a, b) {
  if (operator === '+') return add(a, b)
  if (operator === '-') return subtract(a, b)
  if (operator === '*') return multiply(a, b)
  if (operator === '/') return divide(a, b)
}