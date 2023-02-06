import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Triangle from './js/triangle.js';
// import Rectangle from './js/rectangle.js';

function getGif(query) {

  let request = new XMLHttpRequest();
  const url = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=5&api_key=${process.env.API_KEY}`;

  request.addEventListener("loadend", function () {
    const response = JSON.parse(this.responseText);
    console.log(response['data'][0]['embed_url'])
    console.log(response);
    if (this.status === 200) {
      printElements(response, query);
    } else {
      printError(this, response, query);
    }
  });
  request.open("GET", url, true);
  request.send();
}


window.addEventListener("load", getGif('superman'));
// document.querySelector("#triangle-checker-form").addEventListener("submit", handleTriangleForm);
// document.querySelector("#rectangle-area-form").addEventListener("submit", handleRectangleForm);
// });


// UI Logic

function printElements(apiResponse, query) {
  console.log(`The response is: ${apiResponse.meta.status} for the search query: ${query}`);
  let ulElement = document.getElementById('response');
  apiResponse.data.forEach((element, i) => {
    console.log(apiResponse.data);
    let gifImage = document.createElement('img');
    gifImage.setAttribute('src', `${apiResponse['data'][i]['images']['downsized']['url']}`);
    ulElement.append(gifImage);
  });
}

function printError(request, apiResponse, query) {
      console.log(`There was an error searching ${query}: ${request.status}: ${apiResponse}`);
    }