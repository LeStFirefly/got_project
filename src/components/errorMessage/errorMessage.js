import React, {Component} from 'react';
import './errorMessage.css';
import img from './error.png';

const ErrorMessage = () => {
    return(
        <div className='errorBlock'>
            <span>Something goes wrong</span>
            <img src={img} alt="error-img"/>
        </div>
    )
}

export default ErrorMessage;