import './cartItem.scss';

const CartItem = ({el: { name, price, amount }, onAdd, onRemove}) => {
    return (
        <li className='cart-item'>
            <div>
                <h2>{name}</h2>
                <div className='summary'>
                    <span className='price'>${+price.toFixed(2)}</span>
                    <span className='amount'>{amount}</span>
                </div>
            </div>

            <div className='actions'>
                <button onClick={onRemove}>-</button>
                <button onClick={onAdd}>+</button>
            </div>
        </li>
    )
};

export default CartItem;