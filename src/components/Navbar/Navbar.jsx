import "./Navbar.css"
import Button from '@mui/material/Button';
const Navbar = () => {
    return (
        <nav className="container">
            <Button >Inicio</Button>
            <Button >Sobre nosotros</Button>
            <Button >FaQ</Button>
            <Button >Conctacto</Button>
        </nav>
    )
}

export default Navbar
