import React, {useState, useEffect} from 'react'
import './User_registration.css'

import register from '../../../assets/register.png'

export default function User_Registration(props) {

    const initialValues = {
      username: "",
      password: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isLogin, setIsLogin] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsLogin(true);
  
    }
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isLogin) {
        console.log(formValues);
      }
    }, [formErrors, formValues, isLogin]
    )
  
    const validate = (values) => {
      const errors = {}
      if (!values.username) {
        errors.username = "User Name is Required!"
      }
      if (!values.password) {
        errors.password = "Password is Required!"
      }
      return errors;
    }
  
    // const login_handler = () => {
    //   window.location = '/User_registration'
    // }
  
  
    return (
      <>
        <div class="login_page">
  
          <div class="top_container">
            <h1 className='login_header'> {props.heading} </h1>
          </div>
  
          <div class="bottom_left">
            <div className='login_img'>
              <img src={register} alt='image'/>
            </div>
          </div>
  
          <div class="bottom_right">
            <div className='login_form'>
              <form >
                <h1 className='form_heading'>Registration</h1>
                <div className='form_inputs'>
                  <span className='label_username'>User Name:</span>
                  <input className='input' name='username' type='text' value={formValues.username} onChange={handleChange} />
                  <p className='error_indicator'>{formErrors.username}</p>
                  <span className='label_password'>Password:</span>
                  <input className='input' name='password' type='password' value={formValues.password} onChange={handleChange} />
                  <p className='error_indicator'>{formErrors.password}</p>
                </div>
                <div className='login_btn' onClick={handleSubmit} >
                  <span className='login_btn_name'>Register</span>
                </div>
              </form>
            </div>
          </div>
  
        </div>
      </>
    )
  }