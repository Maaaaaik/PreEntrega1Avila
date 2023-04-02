import { useParams } from "react-router-dom";
import RecipeReviewCard from "../CardV2/CardV2";
import styles from "./CategoryList.module.css"


const CategoryListContainer = ({ productos }) => {
    const { category } = useParams()
    const producto1 = productos.filter((producto) => producto.category.name == category)

    return (
        <div className={styles.container}>

            {producto1.map((producto) => (

                <RecipeReviewCard key={producto.id} producto={producto} />

            ))}

        </div>

    );
};

export default CategoryListContainer
