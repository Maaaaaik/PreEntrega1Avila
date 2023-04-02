import styles from "./listContainer.module.css"
import RecipeReviewCard from "../CardV2/CardV2";

const ItemListContainer = (props) => {
    const { productos, onAdd, onRemove } = props;
    return (
        <div className={styles.container}>
            {productos.map((producto) => (

                <RecipeReviewCard key={producto.id} onAdd={onAdd} onRemove={onRemove} producto={producto} />

            ))}

        </div>

    );
};

export default ItemListContainer
