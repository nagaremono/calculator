"use strict"

let numbers = []
let operators = []
let evaluation = 0
let temp = []

for (let i = 0; i < 10; i++) {
  let BUTTONSSECTION = document.querySelector('.buttons')
  let button = document.createElement('button')
  button.classList.add('number')
  button.textContent = `${i}`
  button.setAttribute('id', `${i}`)

  BUTTONSSECTION.appendChild(button)
}

const numberButton = document.querySelectorAll('.number')
numberButton.forEach((number) => {
  number.addEventListener('click', (e) => {
    temp.push(e.target.id)
    show(temp.join(''))    
  })
})

const operatorButton = document.querySelectorAll('.operator')
operatorButton.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    operators.push(e.target.id)
    numbers.push(temp.join(''))
    temp = []
    show(e.target.id)
  })
})

const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', () => {
  temp = []
  numbers = []
  operators = []
  show('')
})

const equalsButton = document.querySelector('.equals')
equalsButton.addEventListener('click', (e) => {
  numbers.push(temp.join(''))
})
equalsButton.addEventListener('click', evaluate)

function evaluate() {
  let i = 0
  evaluation = 
    numbers.reduce((total, number) => {
      return operate(operators[i++], +total, +number)
  })
  show(evaluation)
}

function operate(operator, a, b) {  
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return a / b
  }
}

function show(item) {
  let display = document.querySelector('p')
  display.textContent = item
}