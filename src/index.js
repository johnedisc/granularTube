import './css/styles.css';
import { Granular } from './js/fetchTube';



// async await fetch
// async function fetchTube(q) {
//   const response = await fetch (`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&type=video&key=${process.env.API_KEY}`);

//   const data = await response.json();
//   return data
//   // const video = data.items[0].id.videoId;
//   // console.log(typeof(video));
//   // return video;
// }
async function fetchTube(q) {
  const response =  await Granular.callAPI(q);
  if (response.items) {
    console.log(response.items[0].id.videoId);
    printResult(response);
  } else {
    console.log(response);
  }
}

function printResult(obj) {
  document.getElementById("output").innerHTML = obj.items[0].id.videoId;
  // console.log(fetchTube(q));

}


function handleFormSubmission(e) {
  e.preventDefault();
  const q = document.getElementById("search").value;
  fetchTube(q);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});
