import './Error.css'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

export default function Error() {
    return (
        <section className='error'>
            <h1 className='error__title'>
                Oh no!
            </h1>
            <div className='error__text'>
                <p>
                    En este momento nos encontramos mejorando la pagina. disculpanos!
                </p>
                <p>
                    Regresa para seguir mirando nuestro menu!
                </p>
            </div>
            <img 
                className='error__img' 
                src='https://images-platform.99static.com//rDWq6GGQJ0ksBpbs33ekHWiM7Uc=/206x33:706x533/fit-in/500x500/99designs-contests-attachments/45/45641/attachment_45641160' 
                alt='Sushi surprise' 
            />
            <Link to='/'>
                <button className='error__button'>
                    Go to home
                    <FaHome className='error__button__icon'/>
                </button>
            </Link>
        </section>
    )
}
