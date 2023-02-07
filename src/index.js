import { Gif } from './js/gifCall.js'
import './css/styles.css';

function trendingGif() {
  let request = new XMLHttpRequest();
  const url = `https://api.giphy.com/v1/gifs/trending?&limit=5&api_key=${process.env.API_KEY}`;
  request.addEventListener("loadend", function () {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response, 'response2');
    } else {
      printError(this, response);
    }
  });
  request.open("GET", url, true);
  request.send();
}

function randomGif() {
  let request = new XMLHttpRequest();
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}`;

  request.addEventListener("loadend", function () {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printSingleElement(response, 'response3');
    } else {
      printError(this, response);
    }
  });
  request.open("GET", url, true);
  request.send();
}
// UI Logic

function clearUL() {
  document.querySelectorAll('ul').forEach( el => {
    while (el.hasChildNodes()) {
      console.log('removing child element');
      el.removeChild(el.firstChild);
    }
  });
}

function printElements(apiDataArr) {
  console.log(apiDataArr[1]);
  let ulElement = document.getElementById(apiDataArr[1]);
  clearUL();
  try {
    if (!apiDataArr[0].data.length) {
      throw new Error(`Unable to find any results with the search query ${apiDataArr[1]}`);
    }
    apiDataArr[0].data.forEach((element, i) => {
      let gifImage = document.createElement('img');
      gifImage.setAttribute('src', `${apiDataArr[0].data[i].images.downsized.url}`);
      ulElement.append(gifImage);
    })
  } catch (error) {
    console.log(error);
    ulElement.append(error);
  }
}

function printSingleElement(apiResponse, element, query) {
  console.log(`The response is: ${apiResponse.meta.status} for the search query: ${query}`);
  let ulElement = document.getElementById(`${element}`);
  clearUL();
  let gifImage = document.createElement('img');
  gifImage.setAttribute('src', `${apiResponse['data']['images']['downsized']['url']}`);
  ulElement.append(gifImage);
}

function printError(request, apiResponse, query) {
  console.log(`There was an error searching ${query}: ${request.status}: ${apiResponse}`);
}

function handleForm(e) {
  e.preventDefault();
  const usrSearch = document.querySelector('#usrSearch').value;
  let gifPromise = Gif.searchAPI(usrSearch);
  gifPromise.then((gifData) => {
    printElements(gifData);
  }, (errorData) => {
    printError(errorData);
  });
}



window.addEventListener('load', () => {
  document.querySelector('form').addEventListener('submit', handleForm);
  document.querySelector('#random').addEventListener('click', randomGif);
  document.querySelector('#trending').addEventListener('click', trendingGif);
}
);