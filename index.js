function rankPerWin(wins, losses) {
  let winBalance = wins - losses
  let rank

  if (winBalance <= 10) {
    rank = "Ferro"
  } else if (winBalance >= 11 && winBalance <= 20) {
    rank = "Bronze"
  } else if (winBalance >= 21 && winBalance <= 50) {
    rank = "Prata"
  } else if (winBalance >= 51 && winBalance <= 80) {
    rank = "Ouro"
  } else if (winBalance >= 81 && winBalance <= 90) {
    rank = "Diamante"
  } else if (winBalance >= 91 && winBalance <= 100) {
    rank = "Landário"
  } else if (winBalance >= 101) {
    rank = "Imortal"
  }

  return `O Herói tem saldo de ${winBalance} e está no nível ${rank}`
}

// Cuidado => heróis com alta dose de memes de aulas ao vivo da pandemia
let herosInfo = [
  {
    nick: "Shaolin Matador de Porco",
    wins: 2100,
    losses: 42
  },
  {
    nick: "Julinha do Algodão Doce",
    wins: 62,
    losses: 11
  },
  {
    nick: "Flavin do Pneu",
    wins: 10,
    losses: 25
  }
]

for (let player of herosInfo) {
  console.log(rankPerWin(player.wins, player.losses))
}