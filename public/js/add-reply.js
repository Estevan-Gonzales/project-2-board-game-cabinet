const newReplyHandler = async(event) => {
    event.preventDefault();
    
    const replyContent = document.querySelector('#reply-content').value.trim();
    
     if (replyContent) {
    const response = await fetch(`/api/reply-routes`, {
      method: 'POST',
      body: JSON.stringify({ replyContent }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/reply-routes/view');
    } else {
      alert('Failed to create reply');
    }
  }
};

document.querySelector('#reply-content').addEventListener('click', newReplyHandler);