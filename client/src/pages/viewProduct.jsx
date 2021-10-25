import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { makeStyles } from '@mui/styles';
import { Divider, Grid, TextField, Typography } from '@mui/material';
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
    Margin: {
        // flexGrow: 1,
        marginTop: "3vh",
    },
    text: {
        width: '85vw',
        marginLeft: '0vh',
        margin: '3vh',
    }
}));
const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
`;
const Container = styled.div`
  flex: 1;
  margin: 10vh;
  height: 70vh;
  position: relative;
`;
const ViewProduct = () => {
    const classes = useStyles()
    const { id } = useParams();
    const [productDetails, setProductDetails] = React.useState({});

    const getProductDetails = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/products/viewSpecificProduct/${id}`);
            setProductDetails(res.data.Response);
            console.log(res.data.Response);
        }
        catch (err) {
            console.log(err);
        }
    }
    React.useEffect(() => {
        getProductDetails();
    }, [])
    return (
        <Container >
            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <Image src={productDetails.product_image} alt={productDetails.product_name} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='h4'>{productDetails.product_name}</Typography>
                    <Typography variant='body1' className={classes.Margin}>Only ${productDetails.product_price} now</Typography>
                    
                    <Typography variant='h5' className={classes.Margin}> Product Description:</Typography>
                    <Typography variant='body1'> {productDetails.product_description}</Typography>
                    <Typography variant='body1' className={classes.Margin}> Ratings: 4/5</Typography>
                    <Divider className={classes.Margin} />
                    <Divider className={classes.Margin} />
                    <Typography variant='h5' className={classes.Margin}> Product Features:</Typography>
                </Grid>
            </Grid>
            <Divider className={classes.Margin} />
            {/* <Typography variant='h6' className={classes.Margin}>  </Typography> */}
            <TextField color='secondary' variant='filled' label='Add your review' className={classes.text}> </TextField>
            <Typography variant='h6' className={classes.Margin}> Top Reviews: </Typography>
            

        </Container>
    )
}

export default ViewProduct;