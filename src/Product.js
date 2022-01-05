import { Card, CardActions, CardContent } from '@mui/material';
import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className='product'>
            {/* <Card>
                <CardContent> */}
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map(() => (
                        <p>⭐</p>
                    ))}

                </div>
            </div>
            <img src={image}></img>
            {/* </CardContent>
                <CardActions> */}

            <button className='product__button' onClick={addToBasket}>Add Item</button>

            {/* </CardActions>
            </Card> */}
        </div>
    )
}

export default Product
