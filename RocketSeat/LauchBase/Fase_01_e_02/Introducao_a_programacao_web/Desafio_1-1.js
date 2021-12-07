// IMC e calculo aposentadoria

const nome = "Silvana";
const peso = 50;
const altura = 1.60;
const sexo = "F";
const idade = 48;
const contribuicao = 23;

// const nome = "Carlos";
// const peso = 120;
// const altura = 1.90;
// const sexo = "M";
// const idade = 70;
// const contribuicao = 50;

const imc = (peso / (altura * altura)).toFixed(2)

if (imc >= 30) {
  console.log(` com imc: ${imc}, voce esta acima do peso, precisa de tratamento!\n`)
} else {
  console.log(` com imc: ${imc}, voce esta com o peso ok!\n`)
}

const aposentadoria = idade + contribuicao

if (sexo == 'F') {
  if (aposentadoria >= 85) {
    console.log(`${nome} voce esta aposentado!`)
  } else {
    console.log(`${nome} voce ainda nao pode se aposentar!`)
  }
} else if (sexo == 'M') {
  if (aposentadoria >= 95) {
    console.log(`${nome} voce esta aposentado!`)
  }
  else {
    console.log(`${nome} voce ainda nao pode se aposentar!`)
  }
}
