import React, { useEffect } from 'react';
import './item_preview.css';
import axios from 'axios';
import { useParams } from 'react-router';
import lux from './../../assets/lux.png';
import plus from './../../assets/plus.png';
import minus from './../../assets/minus.png';   
import { useState } from 'react';

export default function Item_preview() {


    let { id } = useParams();
    console.log(id)


    const[itemName, setItemName] = useState('')
    const[itemPrice, setItemPrice] = useState('')
    const[itemDescription, setItemDescription] = useState('')
    const[img, setImg] = useState('lux.png')



//get item details
const ItemDeatails = async() =>{
    const response = await axios.get(`http://localhost:8080/items/getitems_accto_id/?item_id=${id}`);
    const data = response.data[0];
    console.log(data);
    setItemName(data.item_name);
    setItemPrice(data.price);
    setItemDescription(data.description);
    setImg(data.img_name);
    console.log(data.item_name)



    
}
useEffect(() => {
    ItemDeatails();
},[id])

  return (
    <div className='item-preview'>
        <div className='item-preview-img-div'>
            <img className='item-preview-img' src={ `http://localhost:8080/items/get/?img_name=${img}`} />
        </div>
        <div className='item-preview-details-div'>
            <p className='item-preview-item-name'>{itemName}</p>
            <p className='item-preview-item-price'>{itemPrice}</p>
            <p  className='item-preview-description'>Description</p>
            <p className='item-preview-item-description'>{itemDescription}</p>
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
