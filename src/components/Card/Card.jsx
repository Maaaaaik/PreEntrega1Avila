import { Link } from "react-router-dom";
import styles from "./card.module.css";

const Card = ({ producto }) => {
    return (



        <div className={styles.container}>
            <Link to={"item/" + `${producto.id}`}>
                <h4>{producto.title}</h4>
                <img src={producto.image} alt="" width={200} />
                <p>{producto.description}</p>
                <p>$ {producto.price}</p>
            </Link>
        </div>




    );
};

export default Card;