import Card from "../Card/Card";

const ItemListContainer = ({ productos }) => {
    return (
        <>
            {productos.map((producto) => (

                <Card key={producto.id} producto={producto} />
            ))}
        </>
    );
};

export default ItemListContainer
