import './App.css';

import {BrowserRouter as Router,Route} from "react-router-dom";
import {Switch} from "react-router-dom";

import Navbar from './components/navBar/navbar';

import Home from './page/home/home';

import Login from './page/Login/login';

import Item_preview from './page/item preview/item_preview';
import Add_item from './page/add item/add_item';
import User_Registration from './page/home/User_registration/User_registration';
import { useEffect, useState } from 'react';


function App() {
  const[register,setRegister] = useState(true)
  const currentPath = window.location.pathname;
    console.log(currentPath);
    useEffect(()=>{
      if(currentPath == "/user_registration" ||currentPath == "/"){
        setRegister(false)
    }
    },[]
      )
    
  return (
    <div>
      { register && <Navbar/>}
      {/* <Navbar /> */}
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />

          <Route exact path="/" component={Login} />

          <Route exact path="/item_preview/:id" component={Item_preview} />
          <Route exact path="/add_item" component={Add_item} />
          <Route exact path="/user_registration" component={User_Registration} />

        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
