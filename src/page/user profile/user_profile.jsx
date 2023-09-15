import React from 'react';
import { useParams } from 'react-router';
import './user_profile.css'
import axios from 'axios';

import User from './.././../assets/user.png';
import { useState, useEffect } from 'react';
export default function User_profile() {
    const[f_name, setF_name] = useState('xxxx');
    const[l_name, setL_name] = useState('xxxxx');
    const[email, setEmail] = useState('xxxx');




    let { user_id } = useParams();
    // console.log(user_id)
    // if(!user_id){
    //     window.location.href = '/'
    // }

    const getUser = async () => {
        const res = await axios.get(`http://localhost:8080/users/user/?user_id=${user_id}`);
        // console.log(res.data)
        let user_data = res.data[0]
        setF_name(user_data.first_name);
        setL_name(user_data.last_name);
        setEmail(user_data.email);
    }
    useEffect(() => {
        getUser();
        
    },[user_id])
    
  return (
    <div class="user-profile-parent">
<div class="user-profile-div1">
    <img src={User} />
</div>
<div class="user-profile-div2">
    <h1>User Profile</h1>

    <div className="user-profile-detail-div">
        <p className='use-profile-key-p'>First Name: </p>
        <p className='use-profile-key-p'>{f_name}</p>
    </div>
    <div className="user-profile-detail-div">
        <p className='use-profile-key-p'>Last Name: </p>
        <p className='use-profile-key-p'>{l_name}</p>
    </div>
    <div className="user-profile-detail-div">
      <p className='use-profile-key-p'>Email: </p>
      <p className='use-profile-key-p'>{email}</p>
    </div>
   
    

</div>
</div>
  )
}
