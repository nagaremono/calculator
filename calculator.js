"use strict"

const BUTTONSSECTION = document.querySelector('.buttons')

let numbers = []
let operators = []

for (let i = 0; i < 10; i++) {
  let button = document.createElement('button')
  button.classList.add('number')
  button.textContent = `${i}`
  button.setAttribute('id', `${i}`)

  BUTTONSSECTION.appendChild(button)
}

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    show(e.target.id)
  })
})

const numberButton = document.querySelectorAll('.number')

numberButton.forEach((number) => {
  number.addEventListener('click', (e) => {
    numbers.push(e.target.id)
  })
})

const operatorButton = document.querySelectorAll('.operator')

operatorButton.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    operators.push(e.target.id)
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

function show(item) {
  let display = document.querySelector('.display')
  display.innerHTML = item
}