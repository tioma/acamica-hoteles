class HoteslApi {
  static getHotels() {
    return fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica')
    .then(response => {
      console.log(response);
      return response.json();
    })
  }
}

export default HoteslApi;
