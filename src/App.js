import "./App.css";
import React, { Component } from "react";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

export default class App extends Component {
  state = {
    movies: [],

    searchValue: "",
  };

  componentDidMount() {
    this.getMovie();
  }

  //GET FETCH APİ
  getMovie = () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=7ab603f7fd8c4c10192cd9822304f83c&language=en-US";
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.results }));
  };


  //SEARCH INPUT
  searchInput = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    //MOVİE LİST FİLTER
    var filterMovieList = this.state.movies.filter((movie) => {
      return (
        movie.original_title
          .toLocaleLowerCase()
          .indexOf(this.state.searchValue.toLocaleLowerCase()) !== -1
      );
    });
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SearchBar searchInput={this.searchInput} />
            </div>
            <div className="col-12 mt-2">
              <MovieList
                movieList={filterMovieList}
                deleteMovie={this.deleteMovie}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
