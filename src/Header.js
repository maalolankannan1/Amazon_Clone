import React from 'react'
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            signOut(auth);
        }
    }
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>

            <div className='header__search'>
                <SearchIcon className='header__searchIcon' />
                <input className='header__searchInput' type="text"></input>
            </div>
            <div className='header__nav'>
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className='header__optionLineOne'>Hello {user ? user.email.slice(0, user.email.indexOf("@")) : "Guest"}!</span>
                        <span className='header__optionLineTwo'>{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <Link to="/checkout">
                    <div className='header__optionBasket'>
                        <ShoppingCartIcon />
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header

