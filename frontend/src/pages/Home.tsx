import * as React from 'react';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Announcements from '../components/Announcements';
import Dashboard from './Dashboard';
import './Home.css';


export default function Home() {
    return(
        <div className='body'>

            <Layout/>
            <Dashboard/>
        </div>
    )
}