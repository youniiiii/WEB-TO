function sendText() {
    var textInput = document.getElementById('textInput').value;
    window.location.href = 'another-page.html?text=' + encodeURIComponent(textInput);
  }
/** SECTOR DE LOS AÑOS AUTOMATICA PARA EL FOOTER **/
const año = document.getElementById("copi");
año.innerHTML = new Date().getFullYear();