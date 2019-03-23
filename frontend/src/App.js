import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router'
import './App.css';
import MovieList from "./containers/MovieList/MovieList";
import MovieAdd from "./containers/MovieAdd/MovieAdd";
import MovieDetail from "./containers/MovieDetail/MovieDetail";
import MovieEdit from "./containers/MovieDetail/MovieEdit/MovieEdit";
import HallList from "./containers/HallList/HallList";
import HallDetail from "./containers/HallDetail/HallDetail";
import HallAdd from "./containers/HallAdd/HallAdd";
import HallEdit from "./containers/HallDetail/HallEdit/HallEdit";
import Layout from "./componenets/Layout/Layout";
import Login from "./containers/Login/Login";
import Logout from "./containers/Logout/Logout";
import AuthRoute from "./componenets/AuthRoute/AuthRoute";
import Register from "./containers/Register/Register";
import Cabinet from "./containers/Cabinet/Cabinet";

class App extends Component {
  render() {
      return (
          <div>
              <BrowserRouter>
                  <Layout>
                      <Switch>
                          <AuthRoute path='/halls/:id/edit' component={HallEdit}/>
                          <AuthRoute path='/halls/add' component={HallAdd}/>
                          <Route path='/halls/:id' component={HallDetail}/>
                          <Route path='/halls/' component={HallList}/>
                          <AuthRoute path='/movies/add' component={MovieAdd}/>
                          <AuthRoute path='/movies/:id/edit' component={MovieEdit}/>
                          <Route path='/movies/:id' component={MovieDetail} />
                          <Route path='/login' component={Login} />
                          <Route path='/logout' component={Logout} />
                          <Route path='/register' component={Register} />
                          <Route path='/cabinet' component={Cabinet} />
                          <Route path='/' component={MovieList}/>
                      </Switch>
                  </Layout>
              </BrowserRouter>
          </div>
      );
  }
}

export default App;
