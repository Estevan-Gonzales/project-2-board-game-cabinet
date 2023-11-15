const newReviewHandler = async(event) => {
  event.preventDefault();

  console.log('in event');

  const reviewContent = document.querySelector('#review-content').value.trim();
  const game_id = document.querySelector('#gameId').innerHTML;
  const title = document.querySelector('#title').innerHTML;
    
  if (reviewContent && game_id) {
    console.log('working')
    const response = await fetch(`/api/review`, {
    method: 'POST',
    body: JSON.stringify({ reviewContent, game_id, title }),
    headers: {'Content-Type': 'application/json',},
    });

    if (response.ok) {
      document.location.replace(`/api/review/${game_id}`);
    } else {
      alert('Failed to create post');
    }
  }
};

document.querySelector('.review-form').addEventListener('submit', newReviewHandler);