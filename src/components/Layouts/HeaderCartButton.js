import CartIcon from "../Cart/CartIcon";

import './headerCartButton.scss';


const HeaderCartButton = () => {

    return (
        <button className="button">
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