import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  constructor() {
    super() 
    this.state = {
      filter: "all",
      faves: []
    }
  }

  handleFilterClick = (filter) => {
    this.setState({
      filter: filter
    })
  }

  handleFaveToggle = (film) => {
    const newFaves = this.state.faves.slice();
    const filmIndex = this.state.faves.indexOf(film);
    if(filmIndex < 0) {
      console.log("adding", film.title, "to faves");
      newFaves.push(film);
    } else {
      console.log("removing", newFaves[filmIndex].title, "from faves")
      newFaves.splice(filmIndex, 1);
    }
    this.setState({faves: newFaves});
  }

  render() {
    const filmsToDisplay = this.state.filter==="all" ? this.props.films : this.state.faves
    const allFilms = filmsToDisplay.map(film => {
      return (
          <FilmRow 
            film={film} 
            onFaveToggle={this.handleFaveToggle} 
            isFave={this.state.faves.includes(film)}
            handleDetailsClick={this.props.handleDetailsClick}
          />
        )
    })
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">

          <div className={`film-list-filter ${this.state.filter==='all' ? "is-active" : ""}`} onClick={() => this.handleFilterClick("all")}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>

          <div className={`film-list-filter ${this.state.filter==='faves' ? "is-active" : ""}`} onClick={() => this.handleFilterClick("faves")}>
            FAVES
            <span className="section-count">{this.state.faves.length}</span>
          </div>

        </div>
        { allFilms }
      </div>
    );
  }
}

export default FilmListing;
