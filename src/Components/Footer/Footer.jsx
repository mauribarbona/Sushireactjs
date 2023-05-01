import './Footer.css';
import { RiWhatsappFill, RiInstagramFill, RiFacebookFill, RiTwitterFill } from 'react-icons/ri';

export default function Footer() {
    const socials = [
        {
            id: 1,
            name: 'Instagram',
            link: 'https://www.instagram.com/'
        },
        {
            id: 2,
            name: 'Facebook',
            link: 'https://www.facebook.com/'
        },
        {
            id: 3,
            name: 'Twitter',
            link: 'https://twitter.com/'
        }
    ];

    return (
        <footer className='footer' id='contact-us'>
            <div className='footer__container'>
                <img 
                    src='https://images-platform.99static.com//rDWq6GGQJ0ksBpbs33ekHWiM7Uc=/206x33:706x533/fit-in/500x500/99designs-contests-attachments/45/45641/attachment_45641160' 
                    alt= 'Sushi surprise' 
                    className='footer__logo' 
                />
                <section className='footer__newsletter'>
                    <p className='footer__newsletter__subtitle'>
                        Obten 30% de descuento con la primera compra!
                    </p>
                    <h3 className='footer__newsletter__title'>
                        Subcribite para recibir promociones
                    </h3>
                    <form className='footer__form'>
                        <input 
                            type='email' 
                            required 
                            placeholder='email@gmail.com' 
                            className='footer__form__email'
                        />
                        <input 
                            type='submit' 
                            value='Submit' 
                            className='footer__form__submit' 
                        /> 
                    </form>
                </section>
                <section className='footer__contact'>
                    <h3 className='footer__contact__title'>
                        Contactanos
                    </h3>
                    <a href='/' className='footer__contact__phone'>
                        <RiWhatsappFill className='footer__contact__icon'/>
                        +54 11 4495 3345
                    </a>
                    <h3 className='footer__contact__title'>
                        Siguinos en 
                    </h3>
                    <ul className='footer__contact__socials'>
                        {socials.map((social) => {
                            return (
                                <li className='footer__contact__social' 
                                    key={social.id}>
                                    <a href={social.link} >
                                        {social.name === 'Instagram' ? <RiInstagramFill />
                                        : social.name === 'Facebook' ? <RiFacebookFill />
                                        : <RiTwitterFill />}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </div>
            <section className='footer__legal'>
                <p className='footer__legal__copyright'>
                    © 2023 Sushi Surprise Barbona Inc.
                </p>
                <div className='footer__legal__container'>
                    <p className='footer__legal__privacy'>
                        <a href='/'>
                            Privacy Policy
                        </a>
                    </p>
                    <p className='footer__legal__terms'>
                        <a href='/'>
                            Terminos y Condiciones.
                        </a>
                    </p>
                </div>
            </section>
        </footer>
    )
}
