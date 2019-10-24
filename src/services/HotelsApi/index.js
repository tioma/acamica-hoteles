import Moment from 'moment';

class HoteslService {
  static getHotels() {
    return fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica')
    .then(response => {
      console.log(response);
      return response.json();
    })
  }

  static filterHotels(hotels, payload) {
    let {dateFrom, dateTo, country, price, rooms} = payload
    return hotels.filter(hotel => {
      return Moment(hotel.availabilityFrom).format("YYYY-MM-DD") >= dateFrom
      && Moment(hotel.availabilityTo).format("YYYY-MM-DD") <= dateTo
      && hotel.rooms <= (rooms !== 'select' ? rooms : hotel.rooms)
      && hotel.price === (price !== 'select' ? parseInt(price) : hotel.price)
      && hotel.country.trim().toLowerCase() === (country !== 'select' ? country.trim().toLowerCase() : hotel.country.trim().toLowerCase())
    })
  }
}

export default HoteslService;
