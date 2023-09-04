import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
    const [cart, setCart] = useState([]);

    console.log(cart);

    return (
        <div className="container mx-auto">
            <Header cart={cart} />
            <Products setCart={setCart} cart={cart} />
            <Cart cart={cart} setCart={setCart} />
        </div>
    );
}

export default App;
