import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import PaymentTotal from './PaymentTotal';
import { useStateValue } from './StateProvider'
import { useHistory } from 'react-router-dom';
import axios from './axios';
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import { db } from './firebase';
import { collection, doc, setDoc } from "firebase/firestore";


function Payment() {
    const stripe = useStripe();
    const elements = useElements();
    const [state, dispatch] = useStateValue();

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [processing, setProcessing] = useState(false)
    const [succeeded, setSucceeded] = useState(false)
    const [clientSecret, setClientSecret] = useState(true)
    const history = useHistory();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects payment in currencies subunit.(for INR it expects in paise)
                url: `/payments/create?total=${getBasketTotal(state.basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [state.basket])

    console.log('The CLIENT SECRET IS >>> ', clientSecret)
    const handleChange = (e) => {
        setError(e.error ? e.error.message : "");
        setDisabled(e.empty);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        setProcessing(true);


        if (elements == null) {
            return;
        }

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            }
        }).then(({ paymentIntent }) => {
            //paymentIntnt = payment confirmation
            // console.log(state.user?.email);
            setDoc(doc(db, `users/${state.user?.uid}/orders`, paymentIntent.id), {
                basket: state.basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            }).then((response) => console.log("ALL OK"))
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            });

            history.replace('/orders')
        })
        // const { error, paymentMethod } = await stripe.createPaymentMethod({
        //     type: 'card',
        //     card: elements.getElement(CardElement),
        // });
    };

    return (
        <div className='payment'>
            <h1 className='payment__title'>Checkout ({state.basket.length} items) </h1>
            <table className='payment__table'>
                <tr>
                    <td><strong>Delivery Address</strong></td>
                    <td>{state.user?.email}<br></br>345 React, Js, World-2022</td>
                </tr>
                <tr>
                    <td><strong>Review items and Delivery</strong></td>
                    <td className='payment__items'>
                        {state.basket
                            ?.map(prod =>
                                <CheckoutProduct
                                    id={prod.id}
                                    title={prod.title}
                                    image={prod.image}
                                    price={prod.price}
                                    rating={prod.rating}
                                />)}
                    </td>
                </tr>
                <tr>
                    <td><strong>Payment Methods</strong></td>
                    <td className='payment__methodInfo'>
                        <p><strong>Card Details</strong></p>
                        <form className='payment__card' onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <PaymentTotal />
                            {console.log(disabled)}
                            <button type="submit" disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </form>
                        {error && <div>{error}</div>}
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Payment
