import React, { useEffect } from 'react';
import './home.css';
import axios from 'axios';

import Hero_img from './../../assets/hero_image.png';
import Card from '../../components/catergory_card/card';

export default function Home() {

  //get food products
  const[food_products,setFoodProducts] = React.useState([])
  const getFoodProducts = async () => {
    const res = await axios.get('http://localhost:8080/items/getitems_accto_catergory/?catergory=food products');
    const data = res.data.slice(0, 4);
    console.log(data);
    setFoodProducts(data);
  }
  //get Hygiene products
  const[hygiene_products,setHygieneProducts] = React.useState([])
  const getHygieneProducts = async () => {
    const res = await axios.get('http://localhost:8080/items/getitems_accto_catergory/?catergory=hygiene products');
    const data = res.data.slice(0, 4);
    console.log(data);
    setHygieneProducts(data);
  }
  useEffect(() => {
    getFoodProducts();
    getHygieneProducts();
  },[])
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
                  {hygiene_products.map((item,index)=>(
                    <Card key={index} img={item.img_name} Item={item.item_name} Item_id={item.item_id} />
                  ))}

                </div>
                </div>
                
                <p className='home-food_products-header'>Food products</p>
                <div className='home-body-div-1-catergory-card-div-main'>
                <div className='home-body-div-1-catergory-card-div'>
                  {food_products.map((item,index)=>(
                    <Card key={index} img={item.img_name} Item={item.item_name} Item_id={item.item_id} />
                  ))}

                </div>
                </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}
