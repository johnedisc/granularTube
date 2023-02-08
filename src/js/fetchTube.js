export class Granular {
  static async callAPI(q) {
    try {
      
      const response = await fetch (`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&type=video&key=${process.env.API_KEY}`);
      const data = await response.json();
      if (!response.ok) {
        const errMessage = `${response.status} ${response.statusText}
        ${data.message}`;
        throw new Error(errMessage);
      }
      return data;
    } catch(error) {
      return error;
    }
  }
}