import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import { Avatar,IconButton } from '@mui/material';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { logout, selectUser } from './features/userSlice';
import { auth } from './Firebase';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import { useDispatch } from 'react-redux';
function Header() {


  return (
    <div className='header'>
    <div className='header-left'>
    <IconButton>
    <MenuIcon />
    </IconButton>

    <img src='https://www.logo.wine/a/logo/Gmail/Gmail-Logo.wine.svg' alt='gmail'/>
   <span className='gmail'>Gmail</span>
    </div>

    <div className='header-middle'>
     <SearchIcon />
     <input placeholder='Search mail' type='text' />
     <ArrowDropDownIcon className="header-inputCaret" />

    </div>

    <div className='header-right'>
    <IconButton>
    <AppsIcon />
    
    </IconButton>

    <IconButton>
    <NotificationsIcon />
    
    </IconButton>

    <Avatar  />
    
    </div>
      
    </div>
  )
}

export default Header
