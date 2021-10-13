import React from 'react';
import { Typography, Divider, Paper } from '@mui/material';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import Carousel from 'react-bootstrap/Carousel';

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
        <div style={{ display: 'block', paddingTop: 50 }}>
            <Typography variant='h5' style={{ display: 'block', paddingBottom: 50 }}>
                {name
                    ? <div>Welcome to your dashboard {name} </div>
                    : <div>Please Log in or sign up for the best experience!</div>
                }
            </Typography>
           <Typography variant='h6' style={{ display: 'block', padding: 20 }}> Best Sellers! </Typography>
            <Carousel fade interval={200}>
                {products.map((product, i) => {
                    return (
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                height = '500'
                                src={product.product_image}
                                alt={product.product_name}
                            />
                            <Carousel.Caption>
                                <Typography align='left' variant='h5'>{product.product_name}</Typography>
                                <Typography align='left' variant='h6'>Now just $ {product.product_price}</Typography>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>

            <Typography variant='h6' style={{ display: 'block', padding: 20 }}> Recommended For you </Typography>
            <Carousel fade interval={200}>
                {products.map((product, i) => {
                    return (
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                height = '500'
                                src={product.product_image}
                                alt={product.product_name}
                            />
                            <Carousel.Caption>
                                <Typography align='left' variant='h5'>{product.product_name}</Typography>
                                <Typography align='left' variant='h6'>Now just $ {product.product_price}</Typography>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>

            <Typography variant='h6'style={{ display: 'block', padding: 20 }}> Best Sellers! </Typography>
            <Carousel fade interval={200}>
                {products.map((product, i) => {
                    return (
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                height = '500'
                                src={product.product_image}
                                alt={product.product_name}
                            />
                            <Carousel.Caption>
                                <Typography align='left' variant='h5'>{product.product_name}</Typography>
                                <Typography align='left' variant='h6'>Now just $ {product.product_price}</Typography>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Dashboard;