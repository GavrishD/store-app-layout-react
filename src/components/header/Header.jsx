import logo from './../../img/icons/logo.svg'
import './header.css';

function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logo} alt='Logo shop'/>
                        <span>Fashion</span>
                    </div>
                    <nav className="header__nav">
                        <ul className='header__menu'>
                            <li><a href="#!">Catalogue</a></li>
                            <li><a href="#!">Fashion</a></li>
                            <li><a href="#!">Favourite</a></li>
                            <li><a href="#!">Lifestyle</a></li>
                        </ul>
                        <button type="button" className='header__button'>Sing up</button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;