import React from 'react';
import { Typography } from '@mui/material';
const Dashboard = () => {
    const first_name = localStorage.getItem('name');
    const [name, setName] = React.useState(first_name);
    return (
        <Typography>
            {name 
            ?<div>Welcome to your dashboard {name} </div>
            :<div>Please Log in or sign up for the best experience!</div>
        }
        </Typography>
    )
}

export default Dashboard;