import './App.css';
import Nav from './components/Nav';
import Header from './containers/Header';
import React from "react";
import {
  BrowserRouter as Router, Switch,Route, NavLink, useRouteMatch, useParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
            <Nav />
              <Switch>
                  <Route path="/">
                      <Header/>
                  </Route>
                  <Route path="/product/:id">
                  </Route>
                  <Route path="/cart">
                  </Route>
                  
              </Switch>
        </Router>     
    </div>
  );
}

export default App;
