import React, { Component } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import axios from 'axios';

const apiKey = '7a20b1a816e4c3dd03c64f87eb28fe02';

class MovieList extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(res => this.setState({ movies: res.data.results }))
      .catch(error => console.error(error));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Top movies of this week:</h1>
        <ul className="movieList">
          {movies.map(item => {
            return (
              <li className="movieItem" key={item.id}>
                <Link
                  className="link"
                  to={{
                    pathname: `${routes.MOVIE}/${item.id}`,
                    state: { from: `${routes.HOME}` },
                  }}
                >
                  {item.title ? item.title : item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MovieList;
