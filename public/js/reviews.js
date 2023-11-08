import {
    Modal,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Modal, Ripple });

const newReviewHandler = async(event) => {
  event.preventDefault();
  console.log('in event');
  const reviewContent = document.querySelector('#review-content').value.trim();
  const game_id = document.querySelector('#gameId').value.trim();
    
  if (reviewContent) {
    const response = await fetch(`/api/review`, {
    method: 'POST',
    body: JSON.stringify({ reviewContent, game_id }),
    headers: {'Content-Type': 'application/json',},
    });

    if (response.ok) {
      document.location.replace(`/api/game/${game_id}`);
    } else {
      alert('Failed to create post');
    }
  }
};

document.querySelector('.review-form').addEventListener('submit', newReviewHandler);