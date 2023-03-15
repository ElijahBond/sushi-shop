import Input from '../../UI/Input';

import './mealItemForm.scss';

const MealItemForm = ({id}) => {
    return (
        <form className='form'>
            <Input 
                label='Count'
                input={{
                    id,
                    type: 'number',
                    min: '1',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>I want it!</button>
        </form>
    )
};

export default MealItemForm;