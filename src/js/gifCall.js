export class Gif {
  static searchAPI(query) {
    return new Promise(function(resolve,reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=5&api_key=${process.env.API_KEY}`;
      request.addEventListener("loadend", function () {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response,'response']);
        } else {
          reject([this,response,query]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}