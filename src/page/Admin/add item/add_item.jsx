import React, { useEffect, useState } from 'react';
import './add_item.css';
import Item_preview from '../../../components/admin_item_preview/item_preview';
import Axios from 'axios';

export default function Add_item() {

    //get all items
    const [Items, setItems] = useState([])

    const GetItems = async() =>{
        const res = await Axios.get(`http://localhost:8080/items/getall`)
        console.log(res.data)
        setItems(res.data)
    }
    useEffect(()=>{
        GetItems()
    
    },[])



    const [ItemData, setItemData] = useState({
        item: '',
        price: '',
        description: '',
        catergory:'',
        item_image: null
    })

    const handleChanger = (e) =>{
        const newdata = {...ItemData}
        newdata[e.target.id] = e.target.value
        setItemData(newdata)
    
    }

    const FileHandler = (e) =>{
        const newdata = {...ItemData}
        newdata[e.target.id] = e.target.files[0]
        setItemData(newdata)
    }

    const AddItem = () =>{
        const formData = new FormData()
        formData.append('item_name', ItemData.item)
        formData.append('price', ItemData.price)
        formData.append('description', ItemData.description)
        formData.append('catergory', ItemData.catergory)
        formData.append('file', ItemData.item_image)
        Axios.post('http://localhost:8080/items/add', formData)
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        alert('Item Added')
        // window.location.reload()
    }

  return (
    <div className='add_item-parent-div'>
  
        <div  className='add_item-child-div1'>
            <div  className='item_privew-list'>
                {Items.map((item, index) =>(
                    <Item_preview key={index} item_name={item.item_name} item_price={item.price} item_catergory={item.catergory} item_description={item.description} img={item.img_name}/>
                ))}
            </div>

        </div>
        <div className='add_item-child-div2'>
        <div className='add-item-input-div'>
            <div>
                <label>Item Name</label>
                <input type="text" id='item' onChange={(e)=>handleChanger(e)} value={ItemData.item_name} />
            </div>
            <div>
                <label>Item Price</label>
                <input type="text" id='price' onChange={(e)=>handleChanger(e)} value={ItemData.item_price}/>
            </div>
            <div>
                <label>Item Description</label>
                <input type="text" id='description'  onChange={(e)=>handleChanger(e)} value={ItemData.item_description}/>
            </div>
            <div>
                <label>Item Catergory</label>
                <input type="text" id='catergory'  onChange={(e)=>handleChanger(e)} value={ItemData.catergory}/>
            </div>
            <div>
                <label>Item Image</label>
                <input type="file" id='item_image' onChange={(e)=>FileHandler(e)}  />
            </div>
            <div>
                <button onClick={AddItem}>add</button>
            </div>



        </div>
        </div>
    </div>
    
  )
}
