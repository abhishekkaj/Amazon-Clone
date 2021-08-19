import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
        <div className ="home__container">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/AugART/Electronics/GW/Heros/Amazon_GRD_DesktopHero_Template_3000x1200_5_1._CB645651520_.jpg"
            alt=""/>
            <div className="home__row">
                <Product 
                    title="Corsair CF-9010011 WW T1 Race Gaming Chair Racing Design, Black/Black"
                    price={29570}
                    image="https://m.media-amazon.com/images/I/7101SstjG9L._SL1500_.jpg"
                    rating={5}
                />
                <Product 
                    title="Cosmic Byte Equinox Phobos 7.1 RGB Dual Input USB/3.5mm Gaming Headset with Detachable Microphone"
                    price={3499}
                    image="https://m.media-amazon.com/images/I/719LTwewfoS._SL1500_.jpg"
                    rating={4}
                />
                
                
                
            </div>
            <div className="home__row">
            <Product 
                    title="HP Pavilion Gaming 10th Gen Intel Core i5 Processor 15.6-inch FHD Gaming Laptop"
                    price={63990}
                    image="https://m.media-amazon.com/images/I/611VHOvjkES._SL1080_.jpg"
                    rating={5}
                />
            <Product 
                    title="ASUS TUF Gaming F15 Laptop 15.6 (39.62 cms) FHD 144Hz, Intel Core i5-10300H 10th Gen"
                    price={61990}
                    image="https://m.media-amazon.com/images/I/914o5xV1+8L._SL1500_.jpg"
                    rating={5}
                />
            <Product 
                    title="HP Pavilion Gaming 15.6-inch FHD Gaming Laptop"
                    price={65990}
                    image="https://m.media-amazon.com/images/I/71VlaIUD10L._SL1500_.jpg"
                    rating={5}
                />
                
            </div>
            <div className="home__row">
            <Product 
                    title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                    price={160000 }
                    image="https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
                    rating={5}
                    
                />
            </div>

        </div>
            
        </div>
    )
}

export default Home
