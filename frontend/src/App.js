import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router'
import './App.css';
import MovieList from "./containers/MovieList/MovieList";
import MovieDetail from "./componenets/MovieDetail/MovieDetail";
import MovieAdd from "./containers/MovieAdd/MovieAdd";

class App extends Component {
  render() {
      return (
          <div className="container">
              <BrowserRouter>
                  <Switch>
                      <Route path='/movies/add' component={MovieAdd}/>
                      <Route path='/movies/:id' component={MovieDetail} />
                      <Route path='/' component={MovieList}/>
                  </Switch>
              </BrowserRouter>
          </div>
      );
  }
}

export default App;
