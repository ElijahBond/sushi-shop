import './header.scss';
import sushiImage from '../../assets/sushi.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    
    return (
        <>
            <header className='header'>
                <h1>Sushi Shop</h1>
                <HeaderCartButton />
            </header>
            <div className='main-image'>
                <img src={sushiImage} alt='some sushi' />
            </div>
        </>
    )
};

export default Header;