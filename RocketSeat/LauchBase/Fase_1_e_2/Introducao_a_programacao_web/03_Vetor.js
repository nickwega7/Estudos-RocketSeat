// Vetores

const alunos = [

  {
    name: `Mayk`,
    nota: 9.8
  },

  {
    name: `Diego`,
    nota: 6.2
  },

  {
    name: `Nic`,
    nota: 2.1
  }
]

console.log(alunos)

const media = ((alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3).toFixed(2)

if (media > 5) {
  console.log(`A media foi de ${media}, Parabens Turma!`)
} else {
  console.log(`A media ${media} e menor que 5, Lamento Turma!`)
}