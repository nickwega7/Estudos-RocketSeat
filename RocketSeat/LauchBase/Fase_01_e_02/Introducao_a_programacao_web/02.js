// Condicionais 

const aluno01 = 'Mayk'
const notaAluno01 = 9.8

const aluno02 = "Diego"
const notaAluno02 = 1

const aluno03 = `fulano`
const notaAluno03 = 2

const media = ((notaAluno01 + notaAluno02 + notaAluno03) / 3).toFixed(2)

// Se a media for maior que 5, parabenizar os alunos.

if (media > 5) {
  console.log(`A media foi de ${media}, Parabens Turma!`)
} else {
  console.log(`A media ${media} e menor que 5, Lamento Turma!`)
}