import './OrderSuccess.css'
import { Link, useParams } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

export default function OrderSuccess() {
    const { orderId } = useParams();

    return (
        <section className='success'>
            <h1 className='success__title'>
                Muchas gracias!
            </h1>
            <div>
                <p className='success__text'>
                    Su ID de orden es: <span className='bold'>{orderId}</span> 
                </p>
                <p>
                    Revise se casilla de e-mail para seguir con la compra!
                </p>
            </div>
            <img 
                className='success__img' 
                src='https://images-platform.99static.com//rDWq6GGQJ0ksBpbs33ekHWiM7Uc=/206x33:706x533/fit-in/500x500/99designs-contests-attachments/45/45641/attachment_45641160' 
                alt='Sushi surprise'
            />
            <Link to='/' className='success__link'>
                <button className='success__button'>
                    En camino a su hogar!
                    <FaHome className='success__button__icon'/>
                </button>
            </Link>
        </section>
    )
}