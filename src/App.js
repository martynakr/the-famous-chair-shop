import './App.css';
import Nav from './components/Nav';
import Header from './containers/Header';
import Carousel from './containers/Carousel/Carousel';
import Footer from './components/Footer';
import {
  BrowserRouter as Router, Switch,Route, NavLink, useRouteMatch, useParams } from "react-router-dom";
import ProductList from './containers/ProductList';

function App() {
  return (
    <div className="App">
     <Router>
            <Nav />
              <Switch>
                  <Route path="/">
                      <Header/>
                      <Carousel/>
                      <ProductList/>
                      <Footer/>
                  </Route>
                  <Route path="/product/:id">
                  </Route>
                  <Route path="/cart">
                    <h1>Cart</h1>
                  </Route>
                  
              </Switch>
        </Router>     
    </div>
  );
}

export default App;
