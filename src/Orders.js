import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { db } from './firebase';
import OrderedProduct from './OrderedProduct';
import './Orders.css'
import { useStateValue } from './StateProvider';
import moment from "moment";

function Orders() {
    const [orders, setOrders] = useState([]);
    const [{ user }, dispatch] = useStateValue();
    useEffect(() => {
        // getDocs(collection(db, `users/${user?.uid}/orders`))
        //     .then(orders => orders
        //         .forEach(ord => {
        //             console.log(ord.data());
        //         })
        //     )
        if (user) {
            onSnapshot(
                query(
                    collection(db, `users/${user?.uid}/orders`), orderBy("created", "desc")
                ), (snapshot) => {
                    snapshot.docs.forEach(doc => console.log(doc.data()))
                    setOrders(snapshot.docs.map(doc => {
                        return {
                            id: doc.id,
                            data: doc.data()
                        }
                    }))
                }
            )
        } else {
            setOrders([]);
        }
        console.log(orders)
        // console.log("--------------------")
    }, [user])
    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className="orders__items">
                {/* {console.log(orders)} */}
                {orders?.map(ord => {
                    return <div className='orders__item'>
                        <p>Time of Order: {moment.unix(ord.data.created).format('Do MMMM YYYY, h:mma')}</p>
                        {ord.data.basket.map((prod, idx) => {
                            return <OrderedProduct
                                key={idx}
                                id={prod.id}
                                title={prod.title}
                                image={prod.image}
                                rating={prod.rating}
                                price={prod.price}
                            />
                        })}
                        <h3>Total Amount :{" "}
                            <CurrencyFormat
                                value={ord.data.amount / 100}
                                thousandSeparator={true}
                                decimalScale={2}
                                displayType="text"
                                prefix={'₹'}
                            />
                        </h3>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Orders
