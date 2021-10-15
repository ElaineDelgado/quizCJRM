const form = document.querySelector('form.quiz-form')
const paragraphQuizAnswer = document.createElement('p')
const btnVoltarInicio = document.querySelector('.btn-voltar')

const correctAnswers = ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3']
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

  btnVoltarInicio.insertAdjacentElement('beforebegin', paragraphQuizAnswer)
  paragraphQuizAnswer.textContent = ` Você fez ${totalScore} pontos de 100!`
}

form.addEventListener('submit', totalScorePoints)
