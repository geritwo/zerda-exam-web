// GreenFox Feedback Form clientside scripts

var button = document.querySelector('button');

var feedback = document.querySelector('textarea');
var score = document.querySelector('input[name=score]');
var email = document.querySelector('input[name=email]');
var loading = document.querySelector('h2');
var list = document.querySelector('ul');

loading.hidden = true;

button.addEventListener('click', submitForm);

// AJAX functions

function submitForm() {
  var formData = {
    feedback: feedback.value,
    score: score.value,
    email: email.value
  };
  // debugger;
  loading.hidden = false;
  var httpRequest = initRequest();
  postData(httpRequest, formData);
};

function initRequest() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', 'http://localhost:3000/exam', true);
  return httpRequest;
}

function postData(httpRequest, data) {
  httpRequest.setRequestHeader('Content-Type', 'application/json');

  httpRequest.send(JSON.stringify(data));
  httpRequest.onreadystatechange = displayResponse(httpRequest);
};

function displayResponse(httpRequest) {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          console.log(httpRequest.responseText);
          var response = JSON.parse(httpRequest.responseText).text;
          list.innerHTML += '<li>' + response + '</li>';
          loading.hidden = false;
        } else {
          alert('ERROR: There was a problem with the request.');
        }
    }
};
