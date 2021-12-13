// Function

const alunosDaTurmaA = [

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

const alunosDaTurmaB = [

  {
    name: `Cleitin`,
    nota: 0.8
  },

  {
    name: `Robsu`,
    nota: 8.7
  },

  {
    name: `Stano`,
    nota: 5.4
  }
]

function calculaMedia(alunos) {
  return ((alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3).toFixed(0)
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
  if (media > 5) {
    console.log(`A media da turma ${turma} foi de ${media}, Parabens Turma!`)
  } else {
    console.log(`A media ${media} e menor que 5, Lamento Turma ${turma}!`)
  }
}

enviaMensagem(media1, `A`)
enviaMensagem(media2, `B`)
