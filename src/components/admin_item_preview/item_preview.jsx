import React from 'react';
import './item_preview.css';

export default function Item_preview(props) {
  return (
    <div className='item-preview-div'>
        <div className='item-preview-img-div'>
            <img className="item-preview-img" src={ `http://localhost:8080/items/get/?img_name=${props.img}`} />
        </div>
        <div className='item-preview-details-main-div'>
            <div className='item-preview-details-div'>
                <p className='item-preview-details-p'>Item Name :</p>
                <p>{props.item_name}</p>
            </div>
            <div className='item-preview-details-div'>
                <p className='item-preview-details-p'>Item Price :</p>
                <p>{props.item_price}</p>
            </div>
            <div className='item-preview-details-div'>
                <p className='item-preview-details-p'>Item Catergory :</p>
                <p>{props.item_catergory}</p>
            </div>
            <div className='item-preview-details-div-description'>
                <p className='item-preview-details-p'>Item description :</p>
                <p className='item-preview-details-props'>{props.item_description}</p>
            </div>
            
            
        </div>
    </div>
  )
}
