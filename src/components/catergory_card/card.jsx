import React from 'react';
import './card.css';


export default function Card(props) {
 let img = props.img;
 if(img === undefined || img === null || img === ''){
  img = 'lux.png'; 
  }
  return (
    <div className='card-main-div'>
        <a  href={`/item_preview/${props.Item_id}`}>
        <img src={ `http://localhost:8080/items/get/?img_name=${img}`} className='card-img'/>
        </a>

        <p className='card-p'>{props.Item}</p>
    </div>
  )
}
