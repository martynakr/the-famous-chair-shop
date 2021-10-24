import './App.css';
import Nav from './components/Nav';
import Header from './containers/Header';
import Carousel from './containers/Carousel/Carousel';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import ProductList from './containers/ProductList';
import Product from './containers/Product/Product';
import Cart from './containers/Cart';
import QuantityProvider from './context/QuantityContext';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
          <Switch>
          {/* <QuantityProvider> */}
          <Route path ="/cart">
              <Cart/>
            </Route>
            <Route path="/:id">
              <Product/>
            </Route>
            
            <Route path ="/">
                <Header/>
                <Carousel/>
                <ProductList/>
            </Route>
            {/* </QuantityProvider> */}
          </Switch>
        <Footer/>
      </Router>

{/* <Router>
            <Nav />
            <Switch>
                <Route path="/:id">
                </Route>
                <Route path="/cart">
                    <h1>Cart</h1>
                </Route>
                <Route path="/">
                    <h1>This is the home page</h1>
                </Route>
            </Switch>
        </Router> */}
    </div>
  );
}

export default App;
