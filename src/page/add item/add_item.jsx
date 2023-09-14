import React, { useState } from 'react';
import './add_item.css';

import Axios from 'axios';

export default function Add_item() {
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
    <div>
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
  )
}
