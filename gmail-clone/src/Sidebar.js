import { Button, IconButton } from '@mui/material'
import React from 'react'
import "./Sidebar.css"
import SideBarOption  from './SideBarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DuoIcon from '@mui/icons-material/Duo';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import { openSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';

function Sidebar() {

  const dispatch=useDispatch();


  return (
    <div className='sidebar'>
    <Button
    startIcon={<AddIcon fontSize="large" />}
     className="sidebar-compose"
     onClick={() => dispatch(openSendMessage())}
    
    >
     Compose
     </Button>

     <SideBarOption 
     Icon={InboxIcon}
      title="Inbox" 
      number={54} 
      selected={true} 
      />
      
     <SideBarOption Icon={StarIcon} title="Starred" number={54} />
     <SideBarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
     <SideBarOption Icon={LabelImportantIcon} title="Important" number={54} />
     <SideBarOption Icon={NearMeIcon} title="Sent" number={54} />
     <SideBarOption Icon={NoteIcon} title="Drafts" number={54} />
     <SideBarOption Icon={ExpandMoreIcon} title="More" number={54} />

      <div className='sidebar-footer'>
      <div className='sidebar-footerIcons'>
      <IconButton>
      
      <PersonIcon />
      </IconButton>

      <IconButton>
      
      <DuoIcon />
      </IconButton>

      <IconButton>
      
      <PhoneIcon />
      </IconButton>
      
      
      </div>
      
      </div>
    </div>
  )
}

export default Sidebar
