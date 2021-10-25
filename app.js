const form = document.querySelector('form.quiz-form')
const finalResult = document.querySelector('div.result')


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

  scrollTo(0, 0) //rola a pagina para o eixo x e y,ambos posicao zero
  
  finalResult.classList.remove('d-none')

  /**
   * a quantidade de vezes q a funcao de callback inserida no setInterval vai ser executada
   * vai ser a mesma do counter, ou seja, se o counter final for 50, a funcao do setInterval 
   * vai ser executada 50 vezes pra q a nimacao dos numeros aconteça
   */
  let counter = 0

  const timer = setInterval(() => {
    if (counter === totalScore) {
      clearInterval(timer)
    }
    finalResult.querySelector('span').textContent = `${counter}%`
    counter++
  }, 10)
  console.log(counter)
}

form.addEventListener('submit', totalScorePoints) // acertando todas o resutado é 99%



// a funcao setInterval gera um id q está armazenado na const timer
// console.log(timer)  
//1 , o id setInterval , então passamos a timer no argumento do clearInterval
