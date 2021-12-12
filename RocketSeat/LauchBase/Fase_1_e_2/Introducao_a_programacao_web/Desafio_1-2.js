
const empresa = [
  {
    nome: `Rocketseat`,
    cor: `Roxo`,
    foco: `Programacao`,
    endereco: {
      rua: `Rua Guilherme Gembala`,
      numero: `260`,
    }
  }
]

console.log(`A empresa ${empresa[0].nome} esta localizado na ${empresa[0].endereco.rua}, ${empresa[0].endereco.numero}`)

const Programmer = [
  {
    nome: `Nicolas`,
    idade: `26 anos`,
    tecnologias: [
      {
        nome: `C++`,
        especialidade: `Desktop`,
      },
      {
        nome: `Python`,
        especialidade: `Data Science`,
      },
      {
        nome: `JavaScript`,
        especialidade: `Web/Mobile`,
      }
    ]
  }
]

console.log(`\nO usuario ${Programmer[0].nome} tem ${Programmer[0].idade} e usa a tecnologia ${Programmer[0].tecnologias[2].nome} com especialidade em ${Programmer[0].tecnologias[2].especialidade}`)