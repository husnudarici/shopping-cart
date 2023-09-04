import CartIcon from './CartIcon';

import { PropTypes } from 'prop-types';

const Header = ({ cart }) => {
    Header.propTypes = {
        cart: PropTypes.array.isRequired,
    };

    return (
        <header className="flex justify-between items-center my-5">
            <h1 className="text-3xl font-semibold">Shopping Cart - App</h1>
            <CartIcon cart={cart} />
        </header>
    );
};

export default Header;
