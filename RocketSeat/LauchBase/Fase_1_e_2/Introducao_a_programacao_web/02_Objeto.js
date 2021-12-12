// Objeto 

const aluno01 = {
  name: `Mayk`,
  nota: 9.8
}

const aluno02 = {
  name: `Diego`,
  nota: 6.2
}

const aluno03 = {
  name: `Nic`,
  nota: 2.1
}

const media = ((aluno01.nota + aluno02.nota + aluno03.nota) / 3).toFixed(2)

if (media > 5) {
  console.log(`A media foi de ${media}, Parabens Turma!`)
} else {
  console.log(`A media ${media} e menor que 5, Lamento Turma!`)
}
