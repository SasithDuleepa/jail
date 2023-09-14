import React, { useState } from 'react'
import './login.css'

import login_image from '../../assets/login_image.png'
import google from '../../assets/google.png'

export default function Login() {
    const[loginData, setLoginData] = useState({
        mobile_no:'',
        password:''
    })
    const HandleChange = (e) =>{
        const newdata = {...loginData}
        newdata[e.target.id] = e.target.value
        setLoginData(newdata)
    }
    const LoginHanler = () =>{
        window.location.href = '/home'
        // console.log('login clicked');
    }
    return (
        <div>
            <div className="login-page">
                <div className="login-page-left-container">
                    <div className='login-image-div'>
                        <img src={login_image} className='login_img' />
                    </div>
                </div>

                <div className="login-page-right-container">
                    <div className='login-form-div'>
                       
                            <h1 className='login-form-heading'>Log-In</h1>
                            <div className='login-form-inputs'>
                                <label className='label_mobile'>Mobile Number:</label>
                                <input className='login-input' type='text' id='mobile_no' onChange={(e)=>HandleChange(e)} value={loginData.mobile_no} />
                                <label className='label_password'>Password:</label>
                                <input className='login-input' type='password' id='password' onChange={(e)=>HandleChange(e)} value={loginData.password} /> 
                            </div>
                       
                             <button className='login-btn' onClick={LoginHanler} >Log-In</button>
                  
                          
                            
             
                        <div className='other-logins'>
                            <p className='other-logins-divider'>or</p>
                            <img src={google} className='google-login-icon'/>
                            <div className='dont-have-acc'>
                                <p>Don't have an Account?</p>
                                <a className='go-register' >Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
