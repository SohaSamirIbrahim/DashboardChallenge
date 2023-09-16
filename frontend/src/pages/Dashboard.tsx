import * as React from 'react';
import requireAuth from '../components/requireAuth';
import Announcements from '../components/Announcements';
import Quizes from '../components/Quizes';
import { Box, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

const Dashboard = () => {
    return(
        <React.Fragment>
            <Announcements/>
            <Quizes/>
        </React.Fragment>
    )
}

export default requireAuth(Dashboard);