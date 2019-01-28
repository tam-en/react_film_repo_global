import React, { Component } from 'react';
import './App.css';
import FilmRow from './FilmRow';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: TMDB.films,
      current: {}
    };
  }

  handleDetailsClick = (film) => {
    console.log('fetching deets for', film.title);
  }

  render() {
    return (
      <div className="App">
        <div className="film-library">

        <FilmListing films={this.state.films} 
          handleDetailsClick={this.handleDetailsClick}/>
        <FilmDetails film={this.state.current} />

        </div>
      </div>
    );
  }
}

export default App;
