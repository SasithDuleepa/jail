import './App.css';

import {BrowserRouter as Router,Route} from "react-router-dom";
import {Switch} from "react-router-dom";

import Navbar from './components/navBar/navbar';

import Home from './page/home/home';

import Login from './page/Login/login';

import Item_preview from './page/item preview/item_preview';

import User_Registration from './page/home/User_registration/User_registration';
import User_profile from './page/user profile/user_profile';
import { useEffect, useState } from 'react';
import Footer from './components/footer/footer';

import Admin_login from './page/Admin/login/admin_login';
import Add_item from './page/Admin/catergory/add item/add_item';
import Dashboad from './page/Admin/dashboad/dashboad';
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
          <Route exact path="/home/:user_id" component={Home} />
          <Route exact path="/" component={Login} />
          <Route exact path="/item_preview/:id" component={Item_preview} />          
          <Route exact path="/user_registration" component={User_Registration} />
          <Route exact path="/user_profile/:user_id" component={User_profile} />

          <Route exact path="/admin_login" component={Admin_login} />
          <Route exact path="/add_item" component={Add_item} />
          <Route exact path="/dashboad" component={Dashboad} />

        </Switch>
      </Router>
     <Footer/>
    </div>
  );
}

export default App;
