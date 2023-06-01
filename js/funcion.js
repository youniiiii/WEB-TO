function sendText() {
    var textInput = document.getElementById('textInput').value;
    window.location.href = 'another-page.html?text=' + encodeURIComponent(textInput);
  }
  