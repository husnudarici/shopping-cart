import { FiShoppingCart } from 'react-icons/fi';

import { PropTypes } from 'prop-types';

const CartIcon = ({ cart }) => {
    CartIcon.propTypes = {
        cart: PropTypes.array.isRequired,
    };

    return (
        <div className="icon relative">
            <FiShoppingCart className="text-2xl" />
            {cart.length > 0 && (
                <span className="bg-red-500 text-white flex w-5 h-5 justify-center items-center rounded-full absolute -top-2 -right-3 text-xs">
                    {cart.length}
                </span>
            )}
        </div>
    );
};

export default CartIcon;
