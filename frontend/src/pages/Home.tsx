import * as React from 'react';
import Layout from '../components/Layout';
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