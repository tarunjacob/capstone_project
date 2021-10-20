import React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Container, Typography, Grid } from '@mui/material';
import ProductsGrid from '../components/productsGrid';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    Margin: {
        flexGrow: 1,
        marginTop: "5vh",
    },
}));
const ShopCategory = () => {
    const classes = useStyles();
    const { name, id } = useParams();
    const [products, setProducts] = React.useState([]);
    const getProducts = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/products/viewByCategory/${id}`);
            setProducts(res.data.Response);
        }
        catch (err) {
            console.log(err);
        }
    }
    console.log(products);
    React.useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Container className={classes.Margin}>
            <Typography variant='h5' style={{marginBottom:'3vh'}}>Found {products.length} results for the category "{name}" </Typography>
            <Grid container direction={'row'} spacing={16} alignItems='center'  justify='center'>
                {products.map((product, id) => (
                    <ProductsGrid key={id} value={product} />
                ))}
            </Grid>
        </Container>
    )
}

export default ShopCategory;