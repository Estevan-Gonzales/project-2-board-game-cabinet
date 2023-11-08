const searchFormEl = document.querySelector('#search-form');

const handleSearchFormSubmit = async(event) => {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;

  if (serachInputVal) {
    const response = await fetch(`/api/search-routes`, {
      method: 'POST',
      body: JSON.stringify({ searchInputVal }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/api/search-results');
    } else {
      res.status(404);
    }
  }
};

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
