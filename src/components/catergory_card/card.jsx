import React from 'react';
import './card.css';
import lux from './../../assets/lux.png';

export default function Card() {
  return (
    <div className='card-main-div'>
        <img src={lux} className='card-img'/>
        <p className='card-p'>Soap</p>
    </div>
  )
}
