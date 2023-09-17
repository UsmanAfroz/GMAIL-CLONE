import React from 'react'
import "./EmailRow.css";
import { useNavigate} from "react-router-dom";
import { IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useDispatch } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';



function EmailRow({id,title,subject,description,time}) {
 const navigate=useNavigate();
 

  return (
    <div onClick={()=>navigate("/mail")} className='emailRow'>
    <div className='emailRow-options'>

    <CheckBoxIcon />

    <IconButton>
    <StarBorderIcon />
    </IconButton>

    <IconButton>
    <LabelImportantIcon />
    </IconButton>
    
    </div>

    <h3 className='emailRow-title'>
    {title}
    </h3>

    <div className='emailRow-message'>
    <h4>
    {subject}
    <span className='emailRow-description'>
    {description}
    </span>
    
    </h4>
    </div>

    <div className='emailRow-description'>
    {description}
    </div>

    <p className='emailRow-time '>
    {time}</p> 
  
      
    </div>
  )
}

export default EmailRow
