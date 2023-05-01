import './Header.css';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

export default function Header() {
    return (
        <>
        <header className='header' id='home'>
            <img 
                className='header__img' 
                src='https://images-platform.99static.com//rDWq6GGQJ0ksBpbs33ekHWiM7Uc=/206x33:706x533/fit-in/500x500/99designs-contests-attachments/45/45641/attachment_45641160' 
                alt='Sushi surprise'
            />
            <section className='header__text'>
                <h1 className='header__title'>
                    Sushi Surprise
                </h1>
                <p className='header__description'>
                    El mejor sushi de Bueno Aires <span className='bold'>Todo mejor precio y calidad.</span> Te esperamos!
                </p>
                <p className='header__description'>
                    Del mar a su mesa! <span className='bold'>Lo mejor para una cena romantica.</span>
                </p>
                <Link to='/all'>
                    <button className='header__button'>
                        Ordene ahora
                        <FaAngleRight className='header__button__icon' />
                    </button>
                </Link>
            </section>
        </header>
        </>
    )
}