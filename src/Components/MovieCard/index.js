import React, { Component } from 'react';
import './styles.scss';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';
import { routes } from '../../routes';

const apiKey = '7a20b1a816e4c3dd03c64f87eb28fe02';

class MovieCard extends Component {
  state = {
    movie: [],
    from: '',
    search: '',
  };
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=${apiKey}&language=en-US`,
      )
      .then(movie =>
        this.setState({
          movie: movie.data,
          from: this.props.location?.state?.from,
          search: this.props.location?.state?.search,
        }),
      )
      .catch(error => console.error(error));
  }

  handleClick = () => {
    this.props.history.push({
      pathname: this.state.from || routes.HOME,
      search: this.state.search,
    });
  };
  render() {
    const { movie } = this.state;
    const { match } = this.props;
    return (
      <div className="container">
        <div className="goBackButton" onClick={this.handleClick}>
          Go back
        </div>
        <div className="movieCard">
          <img
            className="moviePoster"
            height="300"
            src={
              movie.poster_path &&
              `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }
            alt="movie-poster"
          />
          <div>
            <h2 className="movieTitle">{movie.original_title}</h2>
            <p className="movieYear">
              ({movie.release_date && movie.release_date.substring(0, 4)})
            </p>
            <p className="movieOvervie">{movie.overview}</p>
          </div>
        </div>
        <div className="cast">
          <Link className="linkToComp" to={`${match.url}/cast`}>
            Cast
          </Link>
          <Route path={`${match.url}/cast`} component={Cast} />
        </div>
        <div className="reviews">
          <Link className="linkToComp" to={`${match.url}/reviews`}>
            Reviews
          </Link>
          <Route path={`${match.url}/reviews`} component={Reviews} />
        </div>
      </div>
    );
  }
}

export default MovieCard;
