import styles from "./listContainer.module.css"
import Card from "../Card/Card"

const ItemListContainer = ({ productos }) => {
    return (
        <div className={styles.container}>
            {productos.map((producto) => (
                <Card key={producto.id} producto={producto} />
            ))}
        </div>

    );
};

export default ItemListContainer
