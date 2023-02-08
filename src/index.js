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
  const response =  await Granular.fetchTube(q);
  if (response.items) {
    console.log(response.items[0].id.videoId);
  } else {
    console.log(response);
  }
}


function handleFormSubmission(e) {
  e.preventDefault();
  const q = document.getElementById("search").value;
  fetchTube(q);
  // document.getElementById("output").innerHTML = ;
  // console.log(fetchTube(q));
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});
