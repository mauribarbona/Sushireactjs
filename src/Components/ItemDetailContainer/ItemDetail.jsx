import './ItemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight, FaCertificate } from 'react-icons/fa';
import { useCartContext } from '../../Context/CartContext';

export default function ItemDetail({item : {id, img, name, longDescription, price, pieces, ingredients, stock, isPremium, isVegetarian}}) {
    const {addToCart, isInCart} = useCartContext()

    function handleOnAdd(quantity) {
        addToCart({id, name, img, price, pieces, isPremium, isVegetarian, stock, quantity})
    }
    
    return (
        <section className='detail'>
            <img 
                src={img}
                alt={`${name} sushi`}
                className='detail__img' 
            />
            <div>
                <div className='detail__description'>
                    <div className="detail__description__title">
                        <h1 className='detail__title'>
                            {name}
                        </h1>
                    </div>
                    <div className='detail__information'>
                        <p>
                            {longDescription}
                        </p>
                        <h3>
                            Detalles
                        </h3>
                        <ul className='detail__information__ingredients'>
                            { ingredients 
                            ?   ingredients.map((ingredient) => (
                                    <li key={ingredient.id} className='detail__ingredients'>
                                        <FaCertificate className='detail__ingredients__icon'/>
                                        {ingredient.name}
                                    </li>
                                ))
                            : <p>Cargando...</p>    
                            }
                        </ul>
                        <p>
                            Haz tu orden aqui <span className='bold'>tu cena</span> te esta esperando!
                        </p>
                        <p>
                            En Sushi Surprise <span className='bold'></span> se respira la cultura japonesa.
                        </p>
                        <p>
                            Ordena ya! El envio sera gratis. <span className='bold'></span>
                        </p>
                    </div>
                    <div className='detail__quantity'>
                        <h2 className='detail__price'>
                            ${price ? price.toFixed(2) : <span>Cargando...</span>}
                        </h2>
                        <p className='detail__pieces'>
                            {pieces} pieces
                        </p>
                        <p className='detail__stock'>
                            En stock: {stock}
                        </p>
                    </div>
                </div>
                {
                    isInCart(id)
                    ?   <Link to='/cart'>
                            <button className='detail__cart__button'>
                                Vamos al carrito
                                <FaAngleRight className='detail__cart__icon'/>
                            </button>
                        </Link>
                    : stock > 0 
                        ?   <ItemCount stock={stock} onAdd={handleOnAdd} /> 
                        :   <p className='detail__empty__stock'>
                                No puedes comprar ahora mismo, regresa cuando hay en stock!
                            </p>
                }
                <Link to='/all'>
                    <button className='detail__home__button'>
                        <FaAngleLeft className='detail__home__icon'/>
                        Mira otra opciones
                    </button>
                </Link>
            </div>
        </section>
    )
}
