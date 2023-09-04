import { PropTypes } from 'prop-types';

const ProductItem = ({ product, cart, setCart }) => {
    ProductItem.propTypes = {
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        }).isRequired,
        cart: PropTypes.array.isRequired,
        setCart: PropTypes.func.isRequired,
    };

    const addToCart = product => {
        if (cart.find(item => item.id === product.id)) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCart(updatedCart);
        } else {
            setCart(prevState => [...prevState, { ...product, quantity: 1 }]);
        }
    };

    return (
        <div className="products-item border p-4 m-2 rounded-lg shadow-lg">
            <figure>
                <img
                    className="w-full h-48 object-cover rounded-lg"
                    src={product.image}
                    alt={product.name}
                />
            </figure>
            <div className="desc">
                <h2 className="text-xl font-semibold my-2">{product.name}</h2>
                <p className="text-gray-500 my-2">{product.price} $</p>
                <button
                    onClick={() => addToCart(product)}
                    className="bg-green-500 text-white px-4 rounded hover:bg-green-800 w-full py-2"
                >
                    Sepete Ekle
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
