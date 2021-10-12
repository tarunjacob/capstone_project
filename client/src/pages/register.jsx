import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { TextField, Grid, Button, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '70vh'
    },
    pad: {
        paddingTop: 15,
    },
    mar: {
        marginTop:30,
    },
    paper: {
        width: 450,
        height: 550,
        margin: "auto",
        paddingTop: 50,
        textAlign: 'center',
    }
}));
const Register = () => {
    const classes = useStyles();
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
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.root}
    >
        <Paper variant="elevation" elevation={4} className={classes.paper} >
            <Grid>
                <Typography variant='h6'> Register </Typography>
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
            <Grid className={classes.mar}>
                <Button color='secondary' onClick={register}> Register! </Button>
            </Grid>
            <Grid className={classes.pad}>
                <Button color='secondary' onClick={() => history.push('/')}> Sign in instead!</Button>
            </Grid>
        </Paper>
        </Grid >
    )
}

export default Register;