import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";

const App = () => {

    const [ cartVIew, setCartView ] = useState(false);

    const showCartHandler = () => {
        setCartView(true)
    }

    const hideCartHandler = () => {
        setCartView(false)
    }

    return (
        <CartContextProvider>
            {cartVIew && <Cart onHideCart={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartContextProvider>
    )
};

export default App;