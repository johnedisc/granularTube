import './css/styles.css';
import { callAPI } from './js/callAPI';

function fetchTube(query) {
  callAPI(query)
    .then((resolveValue) => {
      return resolveValue
    }, (rejectValue) => {
      return rejectValue;
    })
    .then((newValue) => {
      printResult(newValue);
    }, (newReject) => {
      printResult(newReject);
    })
  
}

function printResult(apiObject) {
  document.getElementById("output").innerHTML = apiObject;
}


function handleFormSubmission(e) {
  e.preventDefault();
  const query = document.getElementById("search").value;
  fetchTube(query);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});
