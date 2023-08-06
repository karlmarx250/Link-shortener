function shortenURL() {
    const originalURL = document.getElementById('originalURL').value;
    const apiKey = 'c311a10e4ca94fe0990657fc79105404'; 
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