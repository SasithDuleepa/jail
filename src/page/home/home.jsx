import React from 'react';
import './home.css';

import Hero_img from './../../assets/hero_image.png';
import Card from '../../components/catergory_card/card';

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
        <div className='home-body-div-1'>
            <p className='home-body-div-1-catergory'>Categories</p>
            <div>
                <p  className='home-Hygiene_products-header'>Hygiene products</p>
                <div className='home-body-div-1-catergory-card-div-main'>
                <div className='home-body-div-1-catergory-card-div'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                </div>
                
                <p className='home-food_products-header'>Food products</p>
                <div className='home-body-div-1-catergory-card-div-main'>
                <div className='home-body-div-1-catergory-card-div'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}
