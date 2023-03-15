import CartIcon from "../Cart/CartIcon";

import './headerCartButton.scss';


const HeaderCartButton = ({ onClick }) => {

    return (
        <button 
            className="button"
            onClick={() => onClick()}>
            <span className="icon">
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className="badge">
                2
            </span>
        </button>
    )
};

export default HeaderCartButton;