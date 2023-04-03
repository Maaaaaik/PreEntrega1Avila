import "./Navbar.css"
import Button from "@mui/material/Button";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";



const Navbar = ({ cartItems }) => {
    return (
        <nav className="container">
            <>
                <Link style={{ textDecoration: 'none' }} to={'/'}><h1>Malakita</h1></Link>
                <Link style={{ textDecoration: 'none' }} to={'/'}><Button sx={{ borderRadius: 50, color: "whitesmoke", }}>Inicio</Button></Link>
                <Button sx={{ borderRadius: 50, color: "whitesmoke", }} >Sobre Nosotros</Button>
                <Button sx={{ borderRadius: 50, color: "whitesmoke", }}>FaQ</Button>
                <Button sx={{ borderRadius: 50, color: "whitesmoke", }}>Conctacto</Button>
                <Link style={{ textDecoration: 'none' }} to={'/cart'}><CartWidget sx={{ color: "whitesmoke", }} cartItems={cartItems} /></Link>
            </>
        </nav >
    )
}

export default Navbar
