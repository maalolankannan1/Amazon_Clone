import React, { forwardRef } from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    const FunctionalProduct = forwardRef((props, ref) => (
        <div ref={ref}>
            <CheckoutProduct
                // key={props.id}
                id={props.id}
                title={props.title}
                image={props.image}
                price={props.price}
                rating={props.rating}
            />
        </div>
    ));

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"></img>
                <div>
                    <h3>Hello {user ? user.email.slice(0, user.email.indexOf("@")) : "Guest"}</h3>
                    <h2 className='checkout__title'>Your Shopping Cart</h2>
                    {console.log(basket)}
                    {/* duration={750} leaveAnimation="accordionVertical" */}
                    <FlipMove staggerDurationBy={50} duration={500} leaveAnimation="accordionVertical">
                        {basket?.map((prod, idx) => {
                            return (
                                <FunctionalProduct
                                    key={idx}
                                    id={prod.id}
                                    title={prod.title}
                                    image={prod.image}
                                    price={prod.price}
                                    rating={prod.rating}
                                />
                            )
                        })}
                    </FlipMove>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;


