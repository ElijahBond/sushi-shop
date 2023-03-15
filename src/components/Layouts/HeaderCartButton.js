import { useContext } from 'react';

import CartIcon from "../Cart/CartIcon";
import CartContext from '../../store/cart-context';

import './headerCartButton.scss';

const HeaderCartButton = ({ onClick }) => {
    const cartContext = useContext(CartContext)

    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount
    }, 0)

    return (
        <button 
            className="button"
            onClick={() => onClick()}>
            <span className="icon">
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className="badge">
                {cartItemsNumber}
            </span>
        </button>
    )
};

export default HeaderCartButton;