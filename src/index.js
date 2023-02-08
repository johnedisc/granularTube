import './css/styles.css';
import { callAPI } from './js/callAPI';

function fetchTube(query) {
  callAPI(query)
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  
}

// function printResult(apiObject) {
//   document.getElementById("output").innerHTML = '';
// }


function handleFormSubmission(e) {
  e.preventDefault();
  const query = document.getElementById("search").value;
  fetchTube(query);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});
