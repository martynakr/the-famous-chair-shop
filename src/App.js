import './App.css';
import Nav from './components/Nav';
import Header from './containers/Header';
import Carousel from './containers/Carousel/Carousel';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import ProductList from './containers/ProductList';
import Product from './containers/Product/Product';

function App() {
  return (
    // <Router>
    //   <div className="App">
    //         <Nav />
    //           <Switch>
    //               <Route path="/">
    //                   {/* <Header/>
    //                   <Carousel/>
    //                   <ProductList/> */}
    //                   <h1>Home</h1>
    //               </Route>
    //               <Route path="/:id">
    //               </Route>
    //               <Route path="/cart">
    //                 <h1>Cart</h1>
    //               </Route> 
    //           </Switch>
    //         <Footer/>
    //     </div>
    // </Router>   
    <div className="App">
    <Router>
   
      <Nav/>
      <Switch>
        <Route path="/:id">
          <Product/>
        </Route>
        <Route path ="/cart">
          <h1>Cart</h1>
          </Route>
        <Route path ="/">
                <Header/>
                <Carousel/>
                <ProductList/>
        </Route>

      </Switch>
   
    </Router>
    </div>
  );
}

export default App;
