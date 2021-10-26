const form = document.querySelector('form.quiz-form')
const finalResult = document.querySelector('div.result')
const btnNewGame = document.querySelector('button.btn-new-game')

const correctAnswers = ['2', '4', '3', '1', '3', '2', '4', '1', '3', '2']

let totalScore = 0

const totalScorePoints = (event) => {
  event.preventDefault()  

  const userAnswers = [
    form.anime1.value,
    form.anime2.value,
    form.anime3.value,
    form.anime4.value,
    form.anime5.value,
    form.anime6.value,
    form.anime7.value,
    form.anime8.value,
    form.anime9.value,
    form.anime10.value,
  ]

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      totalScore += 10
    }
  })

  scrollTo(0, 0) 
  
  finalResult.classList.remove('d-none')

  let counter = 0

  const timer = setInterval(() => {
    if (counter === totalScore) {
      clearInterval(timer)
    }
    finalResult.querySelector('span').textContent = `${counter}`
    counter++
  }, 10)
  
  form.reset()   
}

const startsNewQuiz = () => {
  finalResult.classList.add('d-none')
  totalScore = 0
}

form.addEventListener('submit', totalScorePoints) 
btnNewGame.addEventListener('click', startsNewQuiz) 