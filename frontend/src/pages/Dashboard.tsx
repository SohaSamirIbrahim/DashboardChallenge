import * as React from 'react';
import requireAuth from '../components/requireAuth';
import Announcements from '../components/Announcements';
import Quizes from '../components/Quizes';

const Dashboard = () => {
    return(
        <div className='dashboard'>
            <Announcements/>
            <Quizes/>
        </div>
    )
}

export default requireAuth(Dashboard);