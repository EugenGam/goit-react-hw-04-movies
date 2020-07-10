import React, { Component } from 'react';
import axios from 'axios';
import './styles.scss';

const apiKey = '7a20b1a816e4c3dd03c64f87eb28fe02';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const movieId = Number(this.props.match.url.replace(/\D+/g, ''));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`,
      )
      .then(movie => this.setState({ cast: movie.data.cast }))
      .catch(error => console.error(error));
  }

  render() {
    const { cast } = this.state;
    return (
      <ul className="castList">
        {cast.slice(0, 10).map(item => {
          return (
            <li className="castItem" key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
                height="150"
              />
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Cast;
