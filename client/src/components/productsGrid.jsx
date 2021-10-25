import React from 'react';
import styled from "styled-components";
import { Typography, Button, Grid, Card, CardMedia, CardActions, CardContent, ButtonBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        margin: 'auto',
        marginTop: '20px'
    }
}))
const ProductsGrid = ({ value }) => {
    const history = useHistory();
    const classes = useStyles();
    return (
        <Grid item xs={12} md={6} lg={3} >
            <Card sx={{ width: 300, height: 425 }}>
                <ButtonBase onClick={()=>history.push(`/view-product/${value.product_id}`)}>
                    <CardMedia component='img' height='220' src={value.product_image} alt={value.product_name} />
                </ButtonBase>
                <CardContent>
                    <ButtonBase onClick={()=>history.push(`/view-product/${value.product_id}`)}>
                        <Typography gutterBottom variant="h6" component="div">
                            {value.product_name}
                        </Typography>
                    </ButtonBase>
                    <Typography variant="body2" >
                        Only ${value.product_price}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button className={classes.buttonStyle} variant='contained' color='secondary'>Buy Now!</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProductsGrid;