import React from 'react';
import "./SendMail.css";
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form";

import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import { db } from './Firebase';



function SendMail() {

  const dispatch =useDispatch();

type
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) =>{

    console.log(data);
  } 


 


  return (
    <div className='sendMail'>
      <div className='sendMail-header'>
        <h3>New Message</h3>
        <CloseIcon
        onClick={() => dispatch(closeSendMessage())}
         className="sendMail-close" />
      </div>

      {/* Add onSubmit prop to the form element */}
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          name="to"
          placeholder='to'
          type='text'
          {...register("to", { required: true })}
        />

        {errors.to && <p className="error">To is required.</p>}

        <input 
          name='Subject'
          placeholder='Subject'
          type='text'
          // Add the necessary registration using react-hook-form's "register"
          {...register("Subject", { required: true })}
        />
            
        {errors.to && <p className="error">Subject is required.</p>}
          
        <input
          name='Message'
          placeholder='Message'
          type='text'
          className='sendMail-message'
          // Add the necessary registration using react-hook-form's "register"
          {...register("Message", { required: true })}
        />
        {errors.to && <p className="error">Message Name is required.</p>}    

        <div className='sendMail-options'>
          <Button
            className='sendMail-send'
            variant='contained'
            color='primary'
            type='submit'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
