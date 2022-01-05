import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {

    const [{ basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <div className='checkoutproduct'>
            <img className="checkoutproduct__image" src={image} alt="" />
            <div className='checkoutproduct__info'>
                <p className='checkoutproduct__title'>{title}</p>
                <p className='checkoutproduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutproduct__rating'>
                    {Array(rating).fill().map(() => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket} className='checkoutproduct__button'>Remove Item</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
