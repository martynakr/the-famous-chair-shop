import styles from'./App.scss';
import Nav from './components/Nav';
import Header from './containers/Header';
import Carousel from './containers/Carousel/Carousel';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import ProductList from './containers/ProductList';
import Product from './containers/Product/Product';
import Cart from './containers/Cart';
import CartProvider from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Nav/>
            <Switch>
            <Route exact path ="/cart">
                <Cart/>
              </Route>
              <Route exact path="/:id">
                <Product/>
              </Route>
              <Route exact path ="/">
                  <Header/>
                  <Carousel/>
                  <ProductList/>
              </Route>
            </Switch>
          <Footer/>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
