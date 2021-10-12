import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { TextField, Grid, Button } from '@mui/material';
const Login = () => {
    const history = useHistory();
    const [details, setDetails] = React.useState({})
    const handleChange = (e) => {
        const {name, value} = e.target
        setDetails({...details, [name]: value});
    }
    const login = async() => {
        const body = details;
        try{
            const res = await axios.post('http://localhost:8000/auth/login', body);
            if(res.status === 200) {
                localStorage.setItem('uid', res.data.Response.uid);
                localStorage.setItem('name', res.data.Response.first_name);
                alert(`Welcome ${res.data.Response.first_name}!!`);
                history.push('/home');
            }
        }
        catch(err){
            alert(err.response.data.response);
        }
    }
    return (
        <Grid align='center'>
            <Grid>
                Login Page
            </Grid>
            <Grid>
                <TextField label='email' name='email_address' value={details.email} variant='standard' onChange={e => handleChange(e)}></TextField>
            </Grid>
            <Grid>
                <TextField label='password' name='password' type='password' value={details.password} variant='standard' onChange={e => handleChange(e)}></TextField>
            </Grid>
            <Grid>
                <Button onClick={login}>Log In!</Button>
            </Grid>
            <Grid>
                <Button onClick={()=>history.push('/register')}> Sign up instead!</Button>
            </Grid>
        </Grid>
    )
}

export default Login;