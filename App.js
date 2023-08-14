function shortenURL() {
    const originalURL = document.getElementById('originalURL').value;
    const apiKey = '3b94f031410c4ddba060d94b9cc5604f'; 
    const apiUrl = 'https://api.rebrandly.com/v1/links';
  
   
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': apiKey
    },
    body: JSON.stringify({ destination: originalURL })
  })
  .then(response => response.json())
  .then(data => {
    const shortenedURL = data.shortUrl;
    document.getElementById('shortenedURL').innerText = `Shortened URL: ${shortenedURL}`;
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('shortenedURL').innerText = 'Error occurred while shortening URL';
  });
}