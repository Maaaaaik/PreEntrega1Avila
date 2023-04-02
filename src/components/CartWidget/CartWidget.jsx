import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';


const CartWidget = ({ cartItems }) => {
    return (

        <IconButton color='primary' aria-label="Carrito">
            <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartRoundedIcon />
            </Badge>

        </IconButton>

    )
}

export default CartWidget



