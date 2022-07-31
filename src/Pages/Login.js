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
        <h1 className='form-content-left'>
        Hello Heisenbergers,
       Get started with us today! Create your account by filling out the information below.
      
        </h1>
     {!isSubmitted ? 
        <FormSignup submitForm=
    {submitForm} /> : <FormSuccess /> }
 
</div>
    </>

  )
}

export default Login