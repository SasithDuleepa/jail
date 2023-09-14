import React, {useState, useEffect} from 'react'
import './User_registration.css'

import register from '../../../assets/register.png'

export default function User_Registration(props) {

    const initialValues = {
      firstname: "",
      lastname: "",
      password: "",
      confirmpassword: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isRegister, setIsRegister] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsRegister(true);
  
    }
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isRegister) {
        console.log(formValues);
      }
    }, [formErrors, formValues, isRegister]
    )
  
    const validate = (values) => {
      const errors = {}
      if (!values.firstname) {
        errors.firstname = "First Name is Required!"
      }
      if (!values.lastname) {
        errors.lastname = "Last Name is Required!"
      }
      if (!values.password) {
        errors.password = "Password is Required!"
      }
      if (!values.confirmpassword) {
        errors.confirmpassword = "Required confirm password"
      }
      return errors;
    }
  
    // const login_handler = () => {
    //   window.location = '/User_registration'
    // }
  
  
    return (
      <>
        <div class="register_page">
  
          <div class="top_container">
            <h1 className='register_header'> {props.heading} </h1>
          </div>
  
          <div class="bottom_left">
            <div className='register_img'>
              <img src={register} alt='image'/>
            </div>
          </div>
  
          <div class="bottom_right">
            <div className='register_form'>
              <form >
                <h1 className='form_heading'>Registration</h1>
                <div className='form_inputs'>
                  <span className='label_username'>First Name:</span>
                  <input className='input' name='username' type='text' value={formValues.username} onChange={handleChange} />
                  <p className='error_indicator'>{formErrors.firstname}</p>
                  <span className='label_password'>Password:</span>
                  <input className='input' name='password' type='password' value={formValues.password} onChange={handleChange} />
                  <p className='error_indicator'>{formErrors.password}</p>
                  <span className='label_password'>Confirm Password:</span>
                  <input className='input' name='password' type='password' value={formValues.confirmpassword} onChange={handleChange} />
                  <p className='error_indicator'>{formErrors.confirmpassword}</p>
                </div>
                <div className='register_btn' onClick={handleSubmit} >
                  <span className='register_btn_name'>Register</span>
                </div>
              </form>
            </div>
          </div>
  
        </div>
      </>
    )
  }