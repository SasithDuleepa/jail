import React, { useEffect } from 'react';
import './navbar.css';
import cart from './../../assets/shopping_cart.png';
import axios from 'axios';
import { useState } from 'react';

export default function Navbar() {
  const[ user_name, setUser_name] = useState('');
  const[ user_id, setUser_id] = useState('');

  const GetUser = async() => {
    const token_Value = sessionStorage.getItem('token');
    if(token_Value){
      const res =await axios.post('http://localhost:8080/user',{token:token_Value})
      let response_data = res.data;
      // console.log(response_data.decoded)
      if(response_data.error===true){

      }else if(response_data.error===false){
 
        setUser_id(response_data.decoded.user_id);
        setUser_name(response_data.decoded.user_name);
        
      }
    
    }
    // console.log (token_Value)
  }
  useEffect(() => {
    GetUser()
  },[])

  return (
    <div className='navbar-div'>
        <div className='navbar-div-div1'>
            <p className='navbar-div-div1-logo'>Logo</p>
        </div>
        <div className='navbar-div-div2'>
            <a href={`/home/${user_id}`} className='navbar-div-div2-a-home' >Home</a>
            <a href='#' className='navbar-div-div2-a-Catergories' >Catergories</a>
            <a href='#' className='navbar-div-div2-a-Privious_Orders' >Privious Orders</a>
        </div>
        <div className='navbar-div-div3'>
            <img src={cart} alt="cart" className='cart-img'/>
            <a className='user-a' href={`/user_profile/${user_id}`} ></a>
        </div>
    </div>
  )
}
