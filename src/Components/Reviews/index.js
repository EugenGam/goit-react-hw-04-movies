import React, { Component } from 'react';
import axios from 'axios';
import './styles.scss';

const apiKey = '7a20b1a816e4c3dd03c64f87eb28fe02';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const movieId = Number(this.props.match.url.replace(/\D+/g, ''));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`,
      )
      .then(movie => this.setState({ reviews: movie.data.results }))
      .catch(error => console.error(error));
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul className="reviewList">
        {reviews.length !== 0 ? (
          reviews.slice(0, 5).map(item => {
            return (
              <li className="reviewItem" key={item.id}>
                <p className="authorName">{item.author}</p>
                <p className="reviewContent">{item.content}</p>
              </li>
            );
          })
        ) : (
          <p>No reviews...</p>
        )}
      </ul>
    );
  }
}

export default Reviews;
