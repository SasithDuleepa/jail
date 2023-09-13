import React from 'react';
import './home.css';

import Hero_img from './../../assets/hero_image.png';

export default function Home() {
  return (
    <div>
        <div className='home-hero-div'>
            <div  className='home-hero-sub-div1'>
                <div className='home-hero-sub-div-1-div'>
                  <p className='home-hero-sub-div-1-p1'>Make them feel </p>
                  <p className='home-hero-sub-div-1-p2'>Family is near</p>
                  <button className='home-hero-sub-div-1-button'>shop now</button>
                </div>
                
            </div>
            <div className='home-hero-sub-div2'>
                <div className='home-hero-sub-img-div'>
                  <img src={Hero_img} alt="Hero Image" className='home-hero-img' />
                </div>
                
            </div>
        </div>
        <div className='home-body-div-1'></div>
    </div>
  )
}
