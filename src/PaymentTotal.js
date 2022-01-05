import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './PaymentTotal.css'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'

function PaymentTotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='paymentTotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Order Total:
                            <strong> {value}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
            />
        </div>
    )
}

export default PaymentTotal
