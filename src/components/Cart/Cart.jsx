import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Confirm from '../Confirm/Confirm';
import styles from "./Cart.module.css"

export default function Cart(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;


    return (
        <div className={styles.container}>
            <h2>Carrito</h2>
            <div>
                {cartItems.length === 0 && <div>El carrito esta vacio</div>}
                {cartItems.map((item) => (

                    <div key={item.id} className="row">
                        <List sx={{ width: '60%', bgcolor: '#74b29f' }}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="imagen de producto" src={item.image} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.title}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {item.description}
                                            </Typography>
                                            <Typography sx={{ mt: 3 }}>{item.qty} x ${item.price}</Typography>
                                            <CardActions sx={{ justifyContent: 'right' }}>
                                                <Button className="bottonOnAdd" color='primary' sx={{ backgroundColor: '#396f5f', borderRadius: 50 }} variant='filled' onClick={() => onAdd(item)}>
                                                    +
                                                </Button>
                                                <Button className="bottonOnRemove" color='primary' sx={{ backgroundColor: '#396f5f', borderRadius: 50 }} variant='filled' onClick={() => onRemove(item)}>
                                                    -
                                                </Button>
                                            </CardActions>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>
                    </div>
                ))}
                <div className={styles.chekout}>
                    {cartItems.length !== 0 && (
                        <>
                            <List sx={{ minWidth: 300 }} >

                                <ListItem>
                                    <ListItemText
                                        primary="Precio de los productos"
                                        secondary={itemsPrice.toFixed(2)}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="IVA"
                                        secondary={taxPrice.toFixed(2)}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Envio"
                                        secondary={shippingPrice.toFixed(2)}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="TOTAL"
                                        secondary={totalPrice.toFixed(2)}
                                    />
                                </ListItem>
                                <Button color='secondary' variant='filled' onClick={() => alert('Compra realizada con exito!')}>
                                    Realizar compra
                                </Button>
                            </List>


                            <div><Confirm cartItems={cartItems} /></div>

                        </>
                    )}

                </div>
            </div>
        </div>

    );
}

