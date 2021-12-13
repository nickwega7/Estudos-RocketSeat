
const usuarios = [
  {
    name: "Carlos",
    tecnologias: ["HTML", "CSS"]
  },

  {
    name: "Jasmine",
    tecnologias: ["JavaScript", "CSS"]
  },

  {
    name: "Tuane",
    tecnologias: ["HTML", "Node.js"]
  }
];

for (let i = 0; i < usuarios.length; i++) {

  console.log(`${usuarios[i].name} trabalha com ${usuarios[i].tecnologias.join(', ')}`)
  //jois adciona virgulas e espaco. 
}

function checaSeUsuarioUsaCSS(usuario) {
  for (let tecnologia of usuario.tecnologias) {
    // console.log(tecnologia)
    if (tecnologia == 'CSS')
      // console.log(tecnologia)
      return true
  }
  return false

}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])
  // console.log(usuarioTrabalhaComCSS)
  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
  //Nesse bloco ficou um erro que nao consegui resolver, retorna usuario indefinido!
}


