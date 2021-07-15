import "./App.css";
// import { Provider } from "react-redux";
// import store from './redux/store'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MyNav from "./components/navbar";
import Home from './components/home'
import Login from "./components/login";
import NewAccount from "./components/newAccount";
import ViewAllItemsOfCategory from './components/viewAllItemsOfCategory'
import ShoppingCart from "./components/shoppingCart";
import About from "./components/about";

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/a new account">
            <NewAccount/>
          </Route>
          <Route path="/items/:idCategory">
            <ViewAllItemsOfCategory/>
          </Route>
          <Route path="/shopping cart">
            <ShoppingCart/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    // </Provider>
  );
}

export default App;
