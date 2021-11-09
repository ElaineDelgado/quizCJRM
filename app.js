const form = document.querySelector('form.quiz-form')
const finalScoreContainer = document.querySelector('div.final-score-container')
const btnNewQuiz = document.querySelector('button.btn-new-quiz')

const correctAnswers = ['2', '4', '3', '1', '3', '2', '4', '1', '3', '2']

const getUserAnswers = () =>  correctAnswers.map((_, index) =>
  form[`anime${index + 1}`].value)

let totalScore = 0

const calculateUserScore = (userAnswers) => {
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAnswers[index]
    if (isUserAnswerCorrect) {
      totalScore += 10
    }
  })
}

const showFinalScore = () => {
  scrollTo(0, 0)
  finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
  let counter = 0
  const timer = setInterval(() => {
    if (counter === totalScore) {
      clearInterval(timer)
    }
    finalScoreContainer.querySelector('span').textContent = `${counter++}`
  }, 10)
}

const totalScorePoints = (event) => {
  event.preventDefault()

  const userAnswers = getUserAnswers()
  
  calculateUserScore(userAnswers)
  showFinalScore()
  animateFinalScore()
  form.reset()
}

const startsNewQuiz = () => {
  finalScoreContainer.classList.add('d-none')
  totalScore = 0
}

form.addEventListener('submit', totalScorePoints)
btnNewQuiz.addEventListener('click', startsNewQuiz)
