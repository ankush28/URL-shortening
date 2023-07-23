const resultContainer = document.getElementById('resultContainer');
resultContainer.style.display = 'none';
  document.getElementById('apiButton').addEventListener('click', async () => {
    const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
      },
      body: new URLSearchParams({
        url: 'https://google.com/'
      })
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const fresult = result.result_url;
      console.log(result);
  
      const resultContainer = document.getElementById('resultContainer');
      const resultText = document.getElementById('resultText');
      const copyButton = document.getElementById('copyButton');
  
      resultContainer.style.display = 'flex'; 
      resultText.textContent = fresult;     
  
      copyButton.addEventListener('click', () => {
        copyToClipboard(resultText.textContent);
        alert('Copied to clipboard!');
      });
    } catch (error) {
      console.error(error);
    }
  });
  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
  