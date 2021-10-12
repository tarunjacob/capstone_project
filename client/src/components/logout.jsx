import axios from 'axios';
import { Button } from '@mui/material';
import { useHistory } from 'react-router';
const Logout = () => {
    const history = useHistory();
    const logout = () => {
        localStorage.setItem('name', '');
        localStorage.setItem('uid', '');
        alert('Logged Out!');
        history.push('/');
    }
    return(
        <div onClick={logout}>Logout! </div>
    )
}

export default Logout;
