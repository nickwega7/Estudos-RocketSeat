// Repeticao

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
  },

  {
    name: `Liduina`,
    nota: 7.4
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
  },

  {
    name: `Zolol`,
    nota: 3.4
  }
]

function calculaMedia(alunos) {
  let soma = 0
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota
  }
  const media = (soma / alunos.length).toFixed(2)
  return media
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
