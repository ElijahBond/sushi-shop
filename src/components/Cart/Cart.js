import Modal from '../UI/Modal';
import './cart.scss';

const Cart = () => {
    const cartItems = [{name: 'sushi'}].map(el => {
        const { id, name, amount, price } = el;

    return (
        <li>{name}</li>
    )
    
    })

    return (
        <Modal>
            <ul className='cart-items'>
                {cartItems}
            </ul>

            <div className='total'>
                <span>Total</span>
                <span>$99</span>
            </div>
            <div className='actions'>
                <button className='button--alt'>Close</button>
                <button className='button'>Confirm</button>
            </div>
        </Modal>
    )
};

export default Cart;