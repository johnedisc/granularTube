import './css/styles.css';



// async await fetch
async function fetchTube(q) {
  const response = await fetch (`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&type=video&key=${process.env.API_KEY}`);

  const data = await response.json();
  const video = data.items[0].id.videoId;
  console.log(typeof(video));
  return video;
}


function handleFormSubmission(e) {
  e.preventDefault();
  const q = document.getElementById("search").value;
  fetchTube(q);
  document.getElementById("output").innerHTML = ;
  console.log(fetchTube(q));
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});
