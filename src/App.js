import React from 'react';

import Moment from 'moment';

import HotelsService from './services/HotelsApi';

import Filters from './components/Filters';
import Header from './components/Header';
import HotelCard from './components/HotelCard';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();

    const today = new Date()
    const todayFormated = Moment(today).format("YYYY-MM-DD")
    const nextMonthFormated = Moment(today).add(1, 'month').format("YYYY-MM-DD")
    this.state = {
      fetching: true,
      hotels: [],
      hotelsFiltered: [],
      filters: {
        dateFrom: todayFormated,
        dateTo: nextMonthFormated,
        country: 'select',
        price: 'select',
        rooms: 'select'
      },
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange(filters) {
    const hotelsFiltered = HotelsService.filterHotels(this.state.hotels, filters);
    this.setState({
      filters,
      hotelsFiltered,
    })

    console.log(this.state);
  }

  componentDidMount() {
    HotelsService.getHotels().then(hotels => this.setState({ hotels, hotelsFiltered: hotels, fetching: false }));
    console.log(this.state.hotels);
  }

  render() {
    return (
      <div className="App">
        <Header hotels={this.state.hotelsFiltered} />
        <Filters filters={ this.state.filters } onFilterChange={ this.handleFilterChange } />
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              { this.state.hotelsFiltered.map(hotel => <HotelCard {...hotel} key={hotel.slug}/>)}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App;
