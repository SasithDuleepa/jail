import React from 'react';
import './card.css';
import lux from './../../assets/lux.png';

export default function Card() {

  return (
    <div className='card-main-div'>
        <a  href={`/item_preview/${22}`}>
        <img src={lux} className='card-img'/>
        </a>

        <p className='card-p'>Soap</p>
    </div>
  )
}
