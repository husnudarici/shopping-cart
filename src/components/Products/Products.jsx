import productData from '../../productData';
import ProductItem from './ProductItem';

import { PropTypes } from 'prop-types';

const Products = ({ setCart, cart }) => {
    Products.propTypes = {
        cart: PropTypes.array.isRequired,
        setCart: PropTypes.func.isRequired,
    };

    return (
        <div className="products grid grid-cols-3 gap-10">
            {productData.map(product => (
                <ProductItem
                    key={product.id}
                    product={product}
                    cart={cart}
                    setCart={setCart}
                />
            ))}
        </div>
    );
};

export default Products;
