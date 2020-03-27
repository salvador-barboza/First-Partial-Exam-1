function getFizzBuzzSquare(number, isFizz, isBuzz, onClickHandler) {
  const el = document.createElement('span')
  el.classList.add('fizz-buzz-item')

  if (isFizz && isBuzz) {
    el.classList.add('fizzbuzz')
    el.innerText = 'fizzbuzz'
  } else if (isFizz) {
    el.classList.add('fizz')
    el.innerText = 'fizz'
  } else if (isBuzz) {
    el.classList.add('buzz')
    el.innerText = 'buzz'
  } else {
    el.innerText = number
  }

  el.addEventListener('click', () => {
    onClickHandler(el)
  })

  return el
}

function makeFizzBuzzItemList(number, onClickHandler) {
  const children = []
  for (let i = 1; i <= number; i++) {
    const isFizz = i % 3 === 0
    const isBuzz = i % 5 === 0

    children.push(getFizzBuzzSquare(i, isFizz, isBuzz, onClickHandler))
  }

  return children
}


const fizzBuzzNumberInput = document.querySelector('.fizzBuzzNumber')
const results = document.querySelector('.resultsSection')
const submitForm = document.querySelector('#fizzBuzzForm')


function validateNumberIsPositiveNumber(number) {
  return !isNaN(Number(number)) && number > 0
}
function startGame() {
  const number = fizzBuzzNumberInput.value

  if (!validateNumberIsPositiveNumber(number)) {
    return
  }

  const items = makeFizzBuzzItemList(number, (clickedElement) => {
    results.removeChild(clickedElement)
  })

  Array.from(results.children).forEach(
    child => results.removeChild(child))

  items.forEach(item => results.appendChild(item))
}

submitForm.onsubmit = (event) => {
  event.preventDefault()
  startGame()
}
