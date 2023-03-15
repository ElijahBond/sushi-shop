import React from 'react';

import './input.scss';

const Input = React.forwardRef(({ label, input }, ref) => {
    return (
        <div className='input'>
            <label htmlFor={input.id}>
                {label}
            </label>
            <input 
                ref={ref}
                id={input.id} 
                {...input} />
        </div>
    )
});

export default Input;