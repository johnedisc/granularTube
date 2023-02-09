import './css/styles.css';
import { callAPI } from './js/callAPI';

function fetchTube(query) {
  callAPI(query)
    .then((resolveValue) => {
      printResult(resolveValue);
    })
    .catch((error) => {
      printResult(error);
    });
  
}
function clearOutput() {
  document.getElementById('output').innerText = null;
}

function printResult(apiObject) {
  clearOutput();
  let outputEl = document.getElementById("output");
  apiObject.items.forEach(el => {
    let divEl = document.createElement('div');
    let aEl = document.createElement('a');
    aEl.append(el.snippet.title);
    aEl.setAttribute('target','_blank');
    aEl.setAttribute('href',`https://www.youtube.com/watch?v=${el.id.videoId}`);
    divEl.append(aEl);
    outputEl.append(divEl);
  });
  console.log(outputEl);
}


function handleFormSubmission(e) {
  e.preventDefault();
  const query = document.getElementById("search").value;
  document.getElementById("search").value = null;
  fetchTube(query);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});
