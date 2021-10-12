import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { TextField, Grid, Button } from '@mui/material';
import Logout from '../components/logout';
const Register = () => {
    const history = useHistory();
    const [details, setDetails] = React.useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    }
    const register = async () => {
        const body = details;
        try {
            const res = await axios.post('http://localhost:8000/auth/register', body);
            if (res.status === 200) {
                localStorage.setItem('uid', res.data.Response.uid);
                localStorage.setItem('name', res.data.Response.first_name);
                alert(`Welcome ${res.data.Response.first_name}!!`);
                history.push('/home');
            }
        }
        catch (err) {
            alert(err.response.data.response);
        }
    }
    return (
        <Grid align='center'>
            <Grid>
                Register Page
            </Grid>
            <Grid>
                <TextField label='user name' name='user_name' value={details.user_name} variant='standard' onChange={e => handleChange(e)}></TextField>
            </Grid>
            <Grid>
                <TextField label='first name' name='first_name' value={details.first_name} variant='standard' onChange={e => handleChange(e)}></TextField>
            </Grid>
            <Grid>
                <TextField label='last name' name='last_name' value={details.last_name} variant='standard' onChange={e => handleChange(e)}></TextField>
            </Grid>
            <Grid>
                <TextField label='email' name='email_address' value={details.email_address} variant='standard' onChange={e => handleChange(e)}></TextField>
            </Grid>
            <Grid>
                <TextField label='phone number' name='phone_number' value={details.phone_number} variant='standard' onChange={e => handleChange(e)}></TextField>
            </Grid>
            <Grid>
                <TextField label='password' name='password' value={details.password} variant='standard' type='password' onChange={e => handleChange(e)}></TextField>
            </Grid>
            <Grid>
                <Button onClick={register}> Register! </Button>
            </Grid>
            <Grid>
                <Button onClick={() => history.push('/')}> Sign in instead!</Button>
                <Button> <Logout /> </Button>
            </Grid>

        </Grid >
    )
}

export default Register;