async function ownGame() {
  const checkBox = document.getElementById("ownedGameCheckbox");
  
  if (checkBox.checked) {
    const response = await fetch('/api/game/claim', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        owned_id,
        game_id,
        title,
        username,
        rating
      })
    });
    
    if (response.ok) {
      res.render('/api/game/claim', { owned: owned_id });
    }
  }
}