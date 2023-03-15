import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

import './mealItem.scss';

const MealItem = ({meal: {id, name, description, price}}) => {
    const cartContext = useContext(CartContext);
    
    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id,
            name,
            amount,
            price
        })
    }

    return (
        <li className='meal'>
            <div>
                <h3>{name}</h3>
                <div className='description'>{description}</div>
                <div className='price'>${price.toFixed(2)}</div>
            </div>
            
            <div>
                <MealItemForm 
                    id={id}
                    onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
};

export default MealItem;