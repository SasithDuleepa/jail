import React from 'react';
import './navbar.css';
import cart from './../../assets/shopping_cart.png';
export default function Navbar() {
  return (
    <div className='navbar-div'>
        <div className='navbar-div-div1'>
            <p className='navbar-div-div1-logo'>Logo</p>
        </div>
        <div className='navbar-div-div2'>
            <a href='/' className='navbar-div-div2-a-home' >Home</a>
            <a href='#' className='navbar-div-div2-a-Catergories' >Catergories</a>
            <a href='#' className='navbar-div-div2-a-Privious_Orders' >Privious Orders</a>
        </div>
        <div className='navbar-div-div3'>
            <img src={cart} alt="cart" className='cart-img'/>
            <p className='user-a' href='#' ></p>
        </div>
    </div>
  )
}
