import "./Navbar.css"
import Button from "@mui/material/Button";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import MultipleSelect from "../CategoryList/CategoryList";


const Navbar = ({ cartItems }) => {
    return (
        <nav className="container">
            <>
                <Link style={{ textDecoration: 'none' }} to={'/'}><h1>Malakita</h1></Link>
                <Link style={{ textDecoration: 'none' }} to={'/'}><Button >Inicio</Button></Link>
                <Button>Sobre Nosotros</Button>
                <Button>FaQ</Button>
                <Button>Conctacto</Button>
                <Link style={{ textDecoration: 'none' }} to={'/cart'}><CartWidget cartItems={cartItems} /></Link>
            </>
        </nav >
    )
}

export default Navbar
