import styles from'./App.scss';
import Nav from './components/Nav';
import Header from './containers/Header';
import Carousel from './containers/Carousel/Carousel';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import ProductList from './containers/ProductList';
import Product from './containers/Product/Product';

function App() {
  return (
      <div className="App">
        <Router>
          <Nav/>
            <Switch>
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
  );
}

export default App;
