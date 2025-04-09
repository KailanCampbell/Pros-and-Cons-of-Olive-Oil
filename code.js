const yesDiv = document.getElementByID('yes');
const noDiv = document.getElementByID('no');

yesDiv.addEventListener('click', function() {
  responseDiv.innerHTML = 'Awesome sauce!';
});

noDiv.addEventListener('click', function() {
  responseDiv.innerHTML = 'Thats okay! I respect your opinion';
});
