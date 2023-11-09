async function ownGame() {
  const checkBox = document.getElementById("ownedGameCheckbox");
  const game_id = document.getElementById('gameId').innerText;
  const title = document.getElementById('title').innerText;
  console.log(game_id)
 
  if (checkBox.checked) {
    const response = await fetch(`/api/game/claim`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        game_id : game_id,
        title : title,
        // username: 'green'
      })
    });
    
    if (response.ok) {
      res.render(`/api/game/claim`, { owned: owned_id });
    }
  } else {
    //REMOVE GAME FROM OWNED LIST
  }
}
console.log('loading')
document.querySelector('#ownedGameCheckbox').addEventListener('click', ownGame);