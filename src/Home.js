import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                />
                <div className="home__row">
                    <Product id={1234} title='The Lean Startup' image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' price={190.00} rating={4} />
                    <Product id={1233} title='Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Unlocked' image='https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SL1500_.jpg' price={1064.00} rating={4} />
                </div>
                <div className="home__row">
                    <Product id={1456} title='SAMSUNG 23.5” CF396 Curved Computer Monitor, AMD FreeSync for Advanced Gaming' image='https://m.media-amazon.com/images/I/91ubktnbNVL._AC_SL1500_.jpg' price={169.00} rating={4} />
                </div>
                <div className="home__row">
                    <Product id={1277} title="Noise ColorFit Pro 2 Full Touch Control Smart Watch with 35g Weight & Upgraded LCD Display,IP68 Waterproof,Heart Rate Monitor,Sleep & Step Tracker" image='https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg' price={110.00} rating={5} />
                    <Product id={1237} title='Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Unlocked' image='https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SL1500_.jpg' price={1064.00} rating={4} />
                    <Product id={1290} title='Wings Phantom 500 True Wireless Gaming Earbuds | 40ms Ultra Low Latency with Dedicated Gaming Mode | Upto 30Hrs Playtime | 5.1 Bluetooth Headphone | ENC Mic' image='https://m.media-amazon.com/images/I/51JHl62ElqL._SL1000_.jpg' price={50.00} rating={3} />
                </div>
            </div>
        </div>
    )
}

export default Home;


