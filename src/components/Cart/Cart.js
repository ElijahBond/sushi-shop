import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

import './cart.scss';
import CartItem from './CartItem';

const Cart = ({ onHideCart }) => {
    const cartContext = useContext(CartContext);

    const totalAmount = cartContext.totalAmount.toFixed(2);
    const hasItems = cartContext.items.length > 0;

    const removeCartItemHandler = (id) => {
        cartContext.removeItem(id)
    }

    const addCartItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1})
    }

    const cartItems = cartContext.items.map(el => {
    return (
        <CartItem 
            key={el.id}
            el={el}
            onAdd={addCartItemHandler.bind(null, el)}
            onRemove={removeCartItemHandler.bind(null, el.id)}
        />)
    })

    return (
        <Modal onHideCartForBackdrop={onHideCart}>
            <ul className='cart-items'>
                {cartItems}
            </ul>

            <div className='total'>
                <span>Total</span>
                <span>${+totalAmount}</span>
            </div>
            <div className='actions'>
                <button 
                    onClick={() => onHideCart()}
                    className='button--alt'>Close</button>
                {hasItems && <button className='button'>Confirm</button>}
            </div>
        </Modal>
    )
};

export default Cart;