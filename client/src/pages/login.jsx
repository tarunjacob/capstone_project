import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
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
        height: 350,
        margin: "auto",
        paddingTop: 50,
        textAlign: 'center',
    }
}));
const Login = () => {
    const history = useHistory();
    const classes = useStyles();
    const [details, setDetails] = React.useState({})
    const handleChange = (e) => {
        const { name, value } = e.target
        setDetails({ ...details, [name]: value });
    }
    const login = async () => {
        const body = details;
        try {
            const res = await axios.post('http://localhost:8000/auth/login', body);
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
        // <div className={classes.paper}>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            className={classes.root}
        >
            <Paper variant="elevation" elevation={4} className={classes.paper} >
                <Grid item >
                    <Typography variant='h6'> Login </Typography>
                </Grid>
                <Grid item>
                    <TextField label='email' name='email_address' value={details.email} variant='standard' onChange={e => handleChange(e)}></TextField>
                </Grid>
                <Grid item>
                    <TextField label='password' name='password' type='password' value={details.password} variant='standard' onChange={e => handleChange(e)}></TextField>
                </Grid>
                <Grid item className={classes.mar}>
                    <Button variant="contained" color="secondary" onClick={login}>Log In</Button>
                </Grid>
                <Grid item className={classes.pad}>
                    <Button color="secondary" onClick={() => history.push('/register')}> Create a new account </Button>
                </Grid>
            </Paper>
        </Grid>
        // </div>
    )
}

export default Login;