import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Link } from 'react-router-dom';
import { useState } from 'react'

const MediaCard = (props) => {
    const { producto, onAdd } = props;

    return (

        <Card color='primary-light' sx={{ maxWidth: 350 }}>
            <Link style={{ textDecoration: 'none' }} to={"../../item/" + `${producto.id}`}>
                <CardMedia sx={{ height: 250 }}
                    image={producto.images}
                    title={producto.title}
                />
            </Link >
            <CardContent>
                <Typography sx={{ pb: 1 }} gutterBottom variant="h5" component="div">
                    {producto.title}
                </Typography>
                <Link style={{ textDecoration: 'none' }} to={"../../category/" + `${producto.category.name}`}>
                    <Button size='small' variant='outlined' sx={{ borderRadius: 50 }}>

                        {producto.category.name}

                    </Button>
                </Link>

            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>

                <Button onClick={() => onAdd(producto)} sx={{ mb: 2, ml: 1, borderRadius: 50 }} color="primary"
                    size="medium"
                    variant="contained" endIcon={<ShoppingCartRoundedIcon />}>
                    Agregar al carrito
                </Button>
                <Typography sx={{ mr: 2, mb: 2 }} variant='h4' >
                    ${producto.price}
                </Typography>

            </CardActions>
        </Card>

    );
}
export default MediaCard;