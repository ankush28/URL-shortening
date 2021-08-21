var button = document.querySelector('.link-btn')
var inputValue = document.querySelector('.input')
var originalLink = document.querySelector('.shorten-long-link');
var shortLink = document.querySelector('.shorten-short-link');
var x = document.getElementById("shorten-output");

button.addEventListener('click', function(){
      if (x.style.display === "none") {
      x.style.display = "block";
      } else {
      x.style.display = "none";
      }
    fetch('https://api.shrtco.de/v2/shorten?url='+inputValue.value)
    .then(response => response.json())
    .then(data => {
        var orignalValue = data['result']['original_link'];
        var shortValue = data['result']['full_short_link'];        
        originalLink.innerHTML = orignalValue;
        shortLink.innerHTML = shortValue;
        console.log("shortValue");
    })

});
