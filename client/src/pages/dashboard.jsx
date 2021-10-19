import React from 'react';
import { Typography, Divider, Paper } from '@mui/material';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import Carousel from 'react-bootstrap/Carousel';
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Slider from '../components/Slider'

const useStyles = makeStyles((theme) => ({
    dark: {
        color: '#607d8b',
    },
    pad: {
        padding: '50',
    }
}))
const Dashboard = () => {
    const classes = useStyles();
    const first_name = localStorage.getItem('name');
    const [name, setName] = React.useState(first_name);
    const [products, setProducts] = React.useState([]);
    const getProducts = async () => {
        try {
            const res = await axios.get('http://localhost:8000/products/view');
            setProducts(res.data);
            console.log(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    React.useEffect(() => {
        getProducts();
    }, []);
    return (
        <div>
        <Slider/>
        <Categories/>
        <Footer/>
    </div>
    )
}

export default Dashboard;