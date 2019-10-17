import React from 'react';

import HotelsApi from './services/HotelsApi';

import Header from './components/Header';
import HotelCard from './components/HotelCard';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fetching: true,
      hotels: [],
    }
  }

  componentDidMount() {
    HotelsApi.getHotels().then(hotels => this.setState({ hotels, fetching: false }));

    console.log(this.state.hotels);
  }

  render() {
    return (
      <div className="App">
        <Header hotels={this.state.hotels} />
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              { this.state.hotels.map(hotel => <HotelCard {...hotel} />)}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App;
