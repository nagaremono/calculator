"use strict"

let numbers = []
let operators = []
let evaluation = []
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
    if (e.target.id !== '=') operators.push(e.target.id)
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
  evaluation = []
  show('')
})

document.getElementById("=").addEventListener('click', evaluate)

function evaluate() {
  // counter for iterating through operators
  let i = 0

  // evaluate multiplication and division first
  numbers.reduce((total, number, currentIndex) => {
    if (operators[i] === '*' || operators[i] === '/') {
      let tempEval = operate(operators[i++], total, number)
      evaluation.push(tempEval)
      return tempEval
    } else if (operators[i] === '+' || operators[i] === '-') {
      // Makes sure the first and last number is included 
      if (!numbers[currentIndex + 1]) evaluation.push(number)
      if (currentIndex === 1) evaluation.push(total)
      i++
      return number
    }
  })

  operators = operators.filter((operator) => {
    return (operator === '+' || operator === '-')
  })
  
  i = 0
  let finalResult = evaluation.reduce((total, number) => {
      if (operators.length === 0) return evaluation[evaluation.length - 1]
      else return operate(operators[i++], total, number)
    })

  show(finalResult)
  evaluation = []
  operators = []
  numbers = []
  temp = [finalResult]
}

function operate(operator, a, b) {  
  switch (operator) {
    case '+':
      return +a + +b
    case '-':
      return +a - +b
    case '*':
      return +a * +b
    case '/':
      return +a / +b
  }
}

function show(item) {
  let display = document.querySelector('p')
  display.textContent = item
}