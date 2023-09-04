import { PropTypes } from 'prop-types';

const Cart = ({ cart, setCart }) => {
    Cart.propTypes = {
        cart: PropTypes.array.isRequired,
        setCart: PropTypes.func.isRequired,
    };

    let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const clearCart = () => {
        setCart([]);
    };

    if (cart.length === 0) return;

    return (
        <div className="cart border ml-auto w-80 my-5 mx-2 p-4 rounded shadow bg-white">
            <h2 className="font-bold text-3xl mb-7">Cart</h2>
            <ul>
                {cart.map(product => (
                    <li key={product.id} className="my-2 flex justify-between">
                        <span>
                            {product.name} {product.quantity}x
                        </span>
                        <span>{product.price} $</span>
                    </li>
                ))}
            </ul>
            <hr className="my-4" />
            <p className="font-bold text-2xl">Toplam: {total} $</p>
            <button
                onClick={clearCart}
                className="bg-red-500 px-4 py-2 rounded text-white w-full mt-5 hover:bg-red-700"
            >
                Sepeti Boşalt
            </button>
        </div>
    );
};

export default Cart;
