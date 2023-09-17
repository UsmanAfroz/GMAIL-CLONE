
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { auth } from './Firebase';

import Login from './Login';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';




function App() {

  const sendMessageIsOpen=useSelector(selectSendMessageIsOpen);
 
  return (
    <Router>
 
    <div className="app">
      
    <Header />
    <div className='app-body'>
    

   <Sidebar />

   <Routes>

   <Route path="/mail" element={<Mail />} />
   <Route path="/" element={<EmailList />} />
   
   </Routes>

   </div>
  {sendMessageIsOpen && <SendMail />}
 </div>

   </Router>
  
  );
}

export default App;
