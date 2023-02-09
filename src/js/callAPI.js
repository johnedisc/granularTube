export function callAPI(query) {
  return new Promise(function(resolve, reject) {
    let response = new XMLHttpRequest();
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${process.env.API_KEY}`;

    response.addEventListener('loadend', function() {
      console.log(response);
      let apiData = JSON.parse(this.responseText);
      if (response.status === 200) {
        resolve(apiData);
      } else {
        reject(`search query doesn't exist`);
      }

    });

    response.open('GET',url,true);
    response.send();
  });
}