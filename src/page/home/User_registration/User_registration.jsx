import React, {useState, useEffect} from 'react'
import './User_registration.css'

import register from '../../../assets/register.png'

export default function User_Registration(props) {

    const initialValues = {
      firstname: "",
      lastname: "",
      mobilenumber: "",
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
      if (!values.mobilenumber) {
        errors.mobilenumber = "Enter your mobile number"
      }
      if (!values.password) {
        errors.password = "Password is Required!"
      }
      if (!values.confirmpassword) {
        errors.confirmpassword = "Required! confirm password"
      }
      return errors;
    }
  
    // const login_handler = () => {
    //   window.location = '/User_registration'
    // }
  
  
    return (
      <>
        <div className="register_page">
  
          {/* <div className="top_container">
            <h1 className='register_header'> {props.heading} </h1>
          </div>
   */}
          <div className="bottom_left">
            <div className='register_img'>
              <img src={register} className='registration-img' alt='image'/>
            </div>
          </div>
  
          <div className="bottom_right">
            <div className='register_form'>

                <h1 className='form_heading'>Registration</h1>
                <div className='registration-form'>
                  <label className="label_username">First Name:</label>
                  <input className="register_form_input" name="username" type="text" value={formValues.username} onChange={handleChange} />
                  {/* <p className="error_indicator">{formErrors.firstname}</p> */}
                </div>
                <div className='registration-form'>
                  <label className="label_username">Last Name:</label>
                  <input className="register_form_input" name="username" type="text" value={formValues.lastname} onChange={handleChange} />
                  {/* <p className="error_indicator">{formErrors.lasttname}</p> */}
                </div>
                <div className='registration-form'>
                  <label className='label_password'>Mobile Number:</label>
                  <input className='register_form_input' name='mobilenumber' type='number' value={formValues.mobilenumber} onChange={handleChange} />
                  {/* <p className='error_indicator'>{formErrors.mobilenumber}</p> */}
                </div>
                <div className='registration-form'>
                  <label className='label_password'>Password:</label>
                  <input className='register_form_input' name='password' type='password' value={formValues.password} onChange={handleChange} />
                  {/* <p className='error_indicator'>{formErrors.password}</p> */}
                </div>
                <div className='registration-form'>
                  <label className='label_password'>Confirm Password:</label>
                  <input className='register_form_input' name='password' type='password' value={formValues.confirmpassword} onChange={handleChange} />
                  {/* <p className='error_indicator'>{formErrors.confirmpassword}</p> */}
                </div>

                <div className='register_btn' >
                  <button className='register_btn_' onClick={handleSubmit} >Register</button>
                </div>
 
            </div>
          </div>
  
        </div>
      </>
    )
  }