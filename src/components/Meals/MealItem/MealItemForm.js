import { useRef, useState } from 'react';

import Input from '../../UI/Input';

import './mealItemForm.scss';

const MealItemForm = ({id, onAddToCart}) => {
    const [isAmountValid, setIsAmountValid] = useState(true);

    const amountInputRef = useRef()
    const submitHandler = (e) => {
        e.preventDefault();

        const inputAmount = amountInputRef.current.value;
        if (inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 20) {
            setIsAmountValid(false);
            return
        }

        onAddToCart(+inputAmount)
    }

    return (
        <form 
            className='form'
            onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label='Count'
                input={{
                    id,
                    type: 'number',
                    min: '1',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>I want it!</button>
            {!isAmountValid && <p>Please select quantity from 1 to 20 </p>}
        </form>
    )
};

export default MealItemForm;