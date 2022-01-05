import React from 'react'
import './OrderedProduct.css';

function OrderedProduct({ id, title, image, price, rating }) {
    return (
        <div className='orderedProduct'>
            <img className="orderedproduct__image" src={image} alt="" />
            <div className='orderedproduct__info'>
                <p className='orderedproduct__title'>{title}</p>
                <p className='orderedproduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='orderedproduct__rating'>
                    {Array(rating).fill().map(() => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OrderedProduct
