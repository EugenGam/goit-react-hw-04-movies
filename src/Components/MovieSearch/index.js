import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SearchedMovies from '../SearchedMovies';
import './styles.scss';
import { routes } from '../../routes';

class MovieSearch extends Component {
  state = {
    search: [],
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.search}`,
    });
  };

  render() {
    const { search } = this.state;
    return (
      <div className="container">
        <h2>Search:</h2>
        <form className="findForm" onSubmit={this.handleClick}>
          <input value={search} onChange={this.handleChange}></input>
          <button className="findButton">Find</button>
        </form>
        <div>
          <Route path={routes.MOVIESEARCH} component={SearchedMovies} />
        </div>
      </div>
    );
  }
}

export default MovieSearch;
