import React from 'react'
import "./Mail.css"
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';


function Mail() {

  const navigate=useNavigate();



  return (
    <div className='mail'>
    <h1>whatsup</h1>
    <div className='mail-tools'>
    <div className='mail-toolsLeft'>
    
    <IconButton onClick={()=> navigate("/")}>
   <ArrowBackIosNewIcon />
    
    </IconButton>

    <IconButton>
    
    <MoveToInboxIcon />
    </IconButton>
    
    <IconButton>
    <ErrorIcon />
    
    </IconButton>
    
    <IconButton>
    <DeleteIcon />
    
    </IconButton>
    
    <IconButton>
    
    <EmailIcon />
    </IconButton>

    <IconButton>
    
    <WatchLaterIcon  />
    </IconButton>

    <IconButton>
    
    <CheckCircleIcon />
    </IconButton>

    <IconButton>
    
    <LabelImportantIcon />
    </IconButton>
    
    
    <IconButton>
    
    <MoreVertIcon />
    </IconButton>
    
    
    </div>

    <div className='mail-toolsRight'>
    <IconButton>
    <UnfoldMoreIcon />
    
    </IconButton>

    <IconButton>
    <PrintIcon />
    
    </IconButton>
    

    <IconButton>
    <ExitToAppIcon />
    
    </IconButton>
    
    
    
    
    
    </div>

    
    
    </div>

    <div className='mail-body'>
    <div className='mail-bodyHeader'>
    <h2>  </h2>
    <LabelImportantIcon className='mail-important' />
    <p>Title</p>
    <p className='mail-time'>10pm</p>
    </div>

    <div className='mail-message'>
    <p>This is a message</p>
    </div>
    
    </div>
      
    </div>
  )
}

export default Mail
