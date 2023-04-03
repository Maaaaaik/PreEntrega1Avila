import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';



const CartWidget = ({ cartItems }) => {
    return (

        <IconButton sx={{ color: "whitesmoke", }} aria-label="Carrito">
            <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartRoundedIcon />
            </Badge>

        </IconButton>

    )
}

export default CartWidget



