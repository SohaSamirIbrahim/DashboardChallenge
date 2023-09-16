import { Fragment } from 'react';
import {BrowserRouter,Routes,Route, Navigate, useLocation} from 'react-router-dom'
import React from 'react';
import useAnnouncements from './hooks/useAnnouncements';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import Announcements from './components/Announcements';
import Dashboard from './pages/Dashboard';
import Quizes from './components/Quizes';
import Home from './pages/Home';


function App() {
  return (
    <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/home' element = { <Announcements/> } /> */}
          </Routes>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
