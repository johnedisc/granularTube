import './css/styles.css';



// async await fetch
async function fetchTube() {
  const response = await fetch (`https://www.googleapis.com/youtube/v3/search?part=snippet&q=apple+trees&type=video&key=${process.env.API_KEY}`);

  const data = await response.json();

  console.log(data);
}

  fetchTube();

// function handleForm(e) {
//   e.preventDefault();
// }
