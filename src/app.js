import React, { Component, Suspense } from 'react';
import './sass/main.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from './routes';
import Loader from './Components/Loader';
const MovieCard = React.lazy(() => import('./Components/MovieCard'));
const MovieSearch = React.lazy(() => import('./Components/MovieSearch'));
const Navigation = React.lazy(() => import('./Components/Navigation'));
const Home = React.lazy(() => import('./Components/Home'));

class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<Loader />}>
          <Navigation />
          <Switch>
            <Route path={routes.HOME} exact component={Home} />
            <Route path={routes.MOVIESEARCH} exact component={MovieSearch} />
            <Route path={`${routes.MOVIE}/:movieId`} component={MovieCard} />
            <Redirect to="/MOVIE" />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
