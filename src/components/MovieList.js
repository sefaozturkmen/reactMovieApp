import React, { Component } from "react";

export default class MovieList extends Component {
  render() {
    const setVoteClass = (vote) => {
      return vote > 8 ? "green" : "yellow";
    };
    return (
      <div className="d-flex justify-content-start flex-wrap">
        {this.props.movieList.map((movie) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3" key={movie.id}>
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt="..."
              />
              <span className={`rating ${setVoteClass(movie.vote_average)}`}>
                {movie.vote_average}
              </span>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "70px" }}
              >
                <div className="card-title" style={{ margin: 0 }}>
                  {movie.original_title}
                </div>
              </div>
              <div className="overview">
                <h2>Overview</h2>
                <div style={{fontWeight:"300"}}>{movie.overview}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
