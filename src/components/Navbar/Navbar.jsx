import "./Navbar.css"
import Button from '@mui/material/Button';
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="container">

            <Link to={'/'}><h1>Malakita</h1></Link>
            <Button >Inicio</Button>
            <Button >Sobre nosotros</Button>
            <Button >FaQ</Button>
            <Button >Conctacto</Button>
            <CartWidget />
        </nav>
    )
}

export default Navbar
