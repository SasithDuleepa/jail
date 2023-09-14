import './App.css';

import {BrowserRouter as Router,Route} from "react-router-dom";
import {Switch} from "react-router-dom";

import Navbar from './components/navBar/navbar';

import Home from './page/home/home';
import Login from './page/Login/login';
import Item_preview from './page/item preview/item_preview';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/item_preview/:id" component={Item_preview} />

        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
