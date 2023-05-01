import { useState } from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';
import { FaUserAlt, FaTimes, FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    const [hiddenMenu, setHiddenMenu] = useState(true);
    const categories = [
        {id: 1, name: 'regular'}, 
        {id: 2, name: 'premium'}, 
        {id: 3, name: 'vegetarian'}
    ];

    return (
        <nav className='nav__container'>
            <Link to='/'>
                    <img
                    src='https://images-platform.99static.com//rDWq6GGQJ0ksBpbs33ekHWiM7Uc=/206x33:706x533/fit-in/500x500/99designs-contests-attachments/45/45641/attachment_45641160'
                    alt='Sushi surprise'
                    className='nav__logo'
                    />
            </Link>
            <div className='nav__menu' id={(hiddenMenu ? 'nav__hidden' : '')}>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <NavLink 
                            to='/all' 
                            className='nav__link' 
                        >
                            All
                        </NavLink>
                    </li>
                    {   categories.length > 0 
                    ?   categories.map((category) => (
                            <li key={category.id} className='nav__item'>
                                <NavLink 
                                    to={`/category/${category.name}`} 
                                    className='nav__link'
                                >
                                    {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                                </NavLink>
                            </li>
                        ))
                    : <p>Cargando...</p>
                    }
                </ul>
                <FaTimes 
                    className='nav__close__button' 
                    onClick={() => setHiddenMenu(!hiddenMenu)} 
                />
            </div>
            <div className='nav__buttons'>
                <Link to='/error'>
                    <FaUserAlt className='nav__profile__button' />
                </Link>
                <Link to='/cart'>
                    <CartWidget />
                </Link>
                <FaBars 
                    className='nav__toggle__button' 
                    onClick={() => setHiddenMenu(!hiddenMenu)} 
                />
            </div>
        </nav>
    )
}

export default NavBar