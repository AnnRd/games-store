import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
    return (
        <div className="header">
            <div className="wrapper">
                <Link to='/' className='header-title'>
                    Game Store
                </Link>
            </div>
            <div className="wrapper header-cart">
                <Cart/>
            </div>
        </div>
    );
}

export default Header;