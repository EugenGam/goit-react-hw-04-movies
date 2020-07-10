import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

const apiKey = '7a20b1a816e4c3dd03c64f87eb28fe02';

const SearchedMovies = ({ location, match }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (location.search) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie${location.search}&api_key=${apiKey}&language=en-US&%26&page=1&include_adult=false`,
        )
        .then(res => setMovies(res.data.results))
        .catch(error => console.error(error));
    }
  }, [location.search]);

  return (
    <ul className="movieList">
      {movies.map(item => {
        return (
          <li className="movieItem" key={item.id}>
            <Link
              className="link"
              to={{
                pathname: `${routes.MOVIE}/${item.id}`,
                state: { from: `${match.path}`, search: `${location.search}` },
              }}
            >
              {item.title ? item.title : item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchedMovies;
