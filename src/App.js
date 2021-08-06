import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from "./components/pages/Category";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Checkout from "./components/pages/Checkout";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category/:category" component={Category} />
          <Route path="/products" component={Products} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
