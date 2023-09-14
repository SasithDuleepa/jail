import React from 'react';
import './item_preview.css';
import { useParams } from 'react-router';
import lux from './../../assets/lux.png';
import plus from './../../assets/plus.png';
import minus from './../../assets/minus.png';   

export default function Item_preview() {
    let { id } = useParams();
    console.log(id)
  return (
    <div className='item-preview'>
        <div className='item-preview-img-div'>
            <img className='item-preview-img' src={lux} />
        </div>
        <div className='item-preview-details-div'>
            <p className='item-preview-item-name'>Lux</p>
            <p className='item-preview-item-price'>$100</p>
            <p  className='item-preview-description'>Description</p>
            <p className='item-preview-item-description'>Lorem ipsum 
                dolor sit amet consectetur. Tempor mattis felis faucibus faucibus in. 
                Morbi suspendisse vitae elementum 
                egestas proin auctor ullamcorper orci nisl. Urna venenatis molestie
                 erat aliquet turpis a id cras.</p>
            <div className='item-preview-quantity-div'>
                <p>Quantity : </p>
                <a><img src={plus} /></a>
                <p className='item-preview-quantity'>1</p>
                <a><img src={minus} /></a>
            </div>
            <div>
                <button className='item-preview-add-to-cart-button'>Add to Cart</button>
                <button className='item-preview-buy-now-button'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}
