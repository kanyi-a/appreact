import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img src='img/img-3.svg.jpg' alt='success-image' 
          className='form-img-2'
      />
    </div>
  );
};

export default FormSuccess;