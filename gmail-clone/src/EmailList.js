import React, {useEffect, useState } from 'react'
import "./EmailList.css"
import Sections from './Sections'
import EmailRow from './EmailRow'
import { Checkbox, IconButton } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


function EmailList() {

const [emails,setEmails]=useState([]);



    return (
        <div className='emailList'>
            <div className='emailList-settings'>
                <div className='emailList-settingsLeft'>
                    <Checkbox />

                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>

                    <IconButton>
                        <RedoIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>


                </div>

                <div className='emailList-settingsRight'>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>

                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>

                    <IconButton>
                        <SettingsIcon />
                    </IconButton>

                </div>




            </div>


            <div className='emailList-sections'>
                <Sections
                    Icon={InboxIcon}
                    title="primary"
                    color='red'
                    selected />

                <Sections
                    Icon={PeopleIcon}
                    title="Social"
                    color='#1A73E8'
                />


                <Sections
                    Icon={LocalOfferIcon}
                    title="Promotions"
                    color='Green'
                />


            </div>

            <div className='emailList-list'>
            
                <EmailRow
                    
                    title="Twitch"
                    subject="Email"
                    description="It's a message"
                    time="12-12-2000"
                   />
           

                
            </div>



        </div>
    );
}

export default EmailList
