"use strict"

const buttons = document.querySelector('.buttons')

for (let i = 0; i < 10; i++) {
  let button = document.createElement('button')
  button.classList.add(`${i}`)
  button.textContent = `${i}`

  buttons.appendChild(button)
}


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