import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './style.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import AlbumDetail from './pages/AlbumDetail/AlbumDetail';

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <div class="container">
              <Header />
              <Switch>
                <Route
                  exact
                  path={'/'}
                  render={() => {
                    return <Redirect to={'/albums'} />;
                  }}
                />
                <Route exact path={'/albums'} component={Home} />
                <Route exact path={'/album/:id'} component={AlbumDetail} />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
