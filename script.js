/* Desenvolva seu código abaixo */
function playRockPaperScissor(jogador1, jogador2) {
  if ( 
    ((jogador1 === 'Pedra') && (jogador2 === 'Tesoura' )) ||
    ((jogador1 === 'Papel') && (jogador2 === 'Pedra' ))   ||
    ((jogador1 === 'Tesoura') && (jogador2 === 'Papel' ))
  ){
    return "Jogador 1 venceu!"
  }else if (
    ((jogador1 === 'Pedra') && (jogador2 === 'Papel'))    ||
    ((jogador1 === 'Papel') && (jogador2 === 'Tesoura' )) ||
    ((jogador1 === 'Tesoura') && (jogador2 === 'Pedra'))
  ){
    return "Jogador 2 venceu!"
  }else if (
    ((jogador1 === 'Pedra') && (jogador2 === 'Pedra')) ||
    ((jogador1 === 'Papel') && (jogador2 === 'Papel')) ||
    ((jogador1 === 'Tesoura') && (jogador2 === 'Tesoura'))
  ){
    return "Empate!"
  }else{
    return "erro"
  }

}

const resultado = playRockPaperScissor(jogador1, jogador2);
console.log(resultado); 