"use strict"

const BUTTONSSECTION = document.querySelector('.buttons')

let numbers = []
let operators = []
let evaluation = 0

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
    if (e.target.id !== '=' || e.target.id !== 'c') {
      show(e.target.id)
    }
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

const clearButton = document.querySelector('.clear')

clearButton.addEventListener('click', () => {
  numbers = []
  operators = []
  let display = document.querySelector('.display')
  display.innerHTML = ''
})

const equalsButton = document.querySelector('.equals')

equalsButton.addEventListener('click', evaluate)
equalsButton.addEventListener('click', (e) => {
  show(evaluation)
})


function evaluate() {
  let i = 0
  evaluation = 
    numbers.reduce((total, number) => {
      return operate(operators[i++], +total, +number)
  })
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

function show(item) {
  let display = document.querySelector('.display')
  display.innerHTML = item
}