"use strict"

let numbers = []
let operators = []
let evaluation = []
let temp = []
const marker = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

for (let i = 0; i < 10; i++) {
  let BUTTONSSECTION = document.querySelector('.buttons')
  let button = document.createElement('button')
  button.classList.add('number')
  button.classList.add(marker[i])
  button.textContent = `${i}`
  button.setAttribute('id', `${i}`)

  BUTTONSSECTION.appendChild(button)
}

document.querySelectorAll('.number').forEach((number) => {
  number.addEventListener('click', (e) => {
    temp.push(e.target.id)
    show(temp.join(''))    
  })
})

document.querySelectorAll('.operator').forEach((operator) => {
  operator.addEventListener('click', (e) => {
    if (e.target.id !== '=') operators.push(e.target.id)
    numbers.push(temp.join(''))    
    temp = []
    show(e.target.id)
  })
})

document.querySelector('.clear').addEventListener('click', () => {
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

  if (evaluation.length === 2) {
    let temp = evaluation[0]
    evaluation[0] = evaluation[1]
    evaluation[1] = temp
  }
  
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