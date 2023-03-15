import './mealItem.scss';
import MealItemForm from './MealItemForm';

const MealItem = ({meal: {id, name, description, price}}) => {
    return (
        <li className='meal'>
            <div>
                <h3>{name}</h3>
                <div className='description'>{description}</div>
                <div className='price'>${price.toFixed(2)}</div>
            </div>
            
            <div>
                <MealItemForm id={id} />
            </div>
        </li>
    )
};

export default MealItem;