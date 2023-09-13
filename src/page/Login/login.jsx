import React from 'react'
import './login.css'

import login_image from '../../assets/login_image.png'
import google from '../../assets/google.png'

export default function Login() {
    return (
        <div>
            <div class="login-page">
                <div class="login-page-left-container">
                    <div className='login-image-div'>
                        <img src={login_image} className='login_img' />
                    </div>
                </div>

                <div class="login-page-right-container">
                    <div className='login-form-div'>
                        <form>
                            <h1 className='login-form-heading'>Log-In</h1>
                            <div className='login-form-inputs'>
                                <span className='label_mobile'>Mobile Number:</span>
                                <input className='input' type='number' name='mobile_number' />
                                <span className='label_password'>Password:</span>
                                <input className='input' type='password' name='password' />
                            </div>
                            <button className='login-btn'>Log-In</button>
                        </form>
                        <div className='other-logins'>
                            <p className='other-logins-divider'>or</p>
                            <img src={google} className='google-login-icon'/>
                            <div className='dont-have-acc'>
                                <p>Don't have an Account?</p>
                                <span className='go-register' onClick={''}>Register</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
