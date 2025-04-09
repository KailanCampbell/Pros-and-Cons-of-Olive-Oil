const yesDiv = document.getElementById('yes');
const noDiv = document.getElementById('no');
const responseDiv = document.getElementById('response');

yesDiv.addEventListener('click', function() {
  responseDiv.innerHTML = 'Awesome sauce!';
});

noDiv.addEventListener('click', function() {
  responseDiv.innerHTML = 'Thats okay! I respect your opinion';
});
