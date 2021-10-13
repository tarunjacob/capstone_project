import React from 'react';
import { Typography, Divider, Paper } from '@mui/material';
import axios from 'axios';
import Carousel from 'react-material-ui-carousel';
const Dashboard = () => {
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
            <Typography variant='h6'>
                {name
                    ? <div>Welcome to your dashboard {name} </div>
                    : <div>Please Log in or sign up for the best experience!</div>
                }
            </Typography>
            <Divider />
            <Carousel>
                {products.map((product, i) => {
                    return (
                        <div>
                                {/* <img height='400' src={product.product_image} alt={product.product_image} /> */}

                            <Paper>
                                {product.product_name}
                                <img height='400' src={product.product_image} alt={product.product_name} />
                            </Paper>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Dashboard;