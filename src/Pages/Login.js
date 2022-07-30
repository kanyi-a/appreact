import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'

function Login() {
const [isSubmitted, setIsSubmitted] = useState(false)


function submitForm() {
    setIsSubmitted(true)
}
  return (

    <>
    <div className='form-container'>
    <span className='close-btn'> × </span>
        <div className='form-content-left'>
          <img src='img/img5.jpg' alt='spaceship' 
              className='form-img' 
          />
        </div>
     {!isSubmitted ? 
        <FormSignup submitForm=
    {submitForm} /> : <FormSuccess /> }
 
</div>
    </>

  )
}

export default Login