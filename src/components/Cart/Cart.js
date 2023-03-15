import Modal from '../UI/Modal';
import './cart.scss';

const Cart = ({ onHideCart }) => {
    const cartItems = [{name: 'sushi'}].map(el => {
        const { id, name, amount, price } = el;

    return (
        <li key={id}>{name}</li>
    )
    
    })

    return (
        <Modal onHideCartForBackdrop={onHideCart}>
            <ul className='cart-items'>
                {cartItems}
            </ul>

            <div className='total'>
                <span>Total</span>
                <span>$99</span>
            </div>
            <div className='actions'>
                <button 
                    onClick={() => onHideCart()}
                    className='button--alt'>Close</button>
                <button className='button'>Confirm</button>
            </div>
        </Modal>
    )
};

export default Cart;