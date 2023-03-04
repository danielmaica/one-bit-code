function selectPlayer() {
  const position = document.getElementById('position').value
  const name = document.getElementById('name').value
  const number = document.getElementById('number').value

  const confirmation = confirm(`Escalar ${name} como ${position}?`)
  
  if (confirmation) {
    const lineup = document.getElementById('lineup')
    const liPlayer = document.createElement('li')
    liPlayer.id = 'player-' + number
    liPlayer.innerText = `${player.position}: ${player.name} [${player.number}]`
    lineup.append(liPlayer)
  }
  
  document.getElementById('position').value = ''
  document.getElementById('name').value = ''
  document.getElementById('number').value = ''
}

function removePlayer() {
  const numberToRemove = document.getElementById('numberToRemove').value
  const playerToRemove = document.getElementById('player-' + numberToRemove)

  const confirmation = confirm('Remover o jogador ' + playerToRemove.innerText + '?')

  if (confirmation) {
    const lineup = document.getElementById('lineup')
    lineup.removeChild(playerToRemove)
  }

  document.getElementById('numberToRemove').value = ''
}