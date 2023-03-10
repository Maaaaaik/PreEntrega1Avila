import "./Navbar.css"
import Button from '@mui/material/Button';
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="container">

            <Link to={'/'}><h1>Malakita</h1></Link>
            <Link to={'/'}><Button >Inicio</Button></Link>
            <Button >Sobre nosotros</Button>
            <Button >FaQ</Button>
            <Button >Conctacto</Button>
            <CartWidget />
        </nav>
    )
}

export default Navbar
