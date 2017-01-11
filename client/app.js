// GreenFox Feedback Form clientside scripts

var button = document.querySelector('button');

var feedback = document.querySelector('textarea');
var score = document.querySelector('input[name=score]');
var email = document.querySelector('input[name=e-mail]');
var loading = document.querySelector('h2');

button.addEventListener('click', function () {
  loading.classList.remove('hide');
});
