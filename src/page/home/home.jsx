import React from 'react';
import './home.css';

import Hero_img from './../../assets/hero_image.png';

export default function Home() {
  return (
    <div>
        <div className='home-hero-div'>
            <div  className='home-hero-sub-div1'>
                <div>
                  <p>Make them feel </p>
                  <p>family is near</p>
                  <button>shop now</button>
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
