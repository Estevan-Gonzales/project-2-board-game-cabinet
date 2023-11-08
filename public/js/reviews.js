import {
    Modal,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Modal, Ripple });

  const newReviewHandler = async(event) => {
    event.preventDefault();
    
    const reviewContent = document.querySelector('#review-content').value.trim();
    
     if (reviewContent) {
    const response = await fetch(`/api/review-routes`, {
      method: 'POST',
      body: JSON.stringify({ reviewContent }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/review-routes');
    } else {
      alert('Failed to create post');
    }
  }
};

document.querySelector('#review-content').addEventListener('click', newReviewHandler);