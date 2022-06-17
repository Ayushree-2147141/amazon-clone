import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img 
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/PC_Hero_3000x1200._CB643589305_.jpg" alt="" 
              /> 
            
            <div className="home__row">
                <Product
                  id="1231231231"
                  title = "The lean startup how constant innovation creates radically successful business paperbacks."
                  image = "https://images-na.ssl-images-amazon.com/images/I/41+CqNWoutS._SX460_BO1,204,203,200_.jpg" 
                  price = {29.99}
                  rating = {5}
                />
                <Product 
                  id="3461312334"
                  title = "Echo (4th Gen, 2020 release) | Premium sound powered by Dolby and Alexa (Blue)"
                  image = "https://m.media-amazon.com/images/I/61NIsUGl+FL._SX342_SY445_.jpg" 
                  price = {239.00}
                  rating = {5}
                />
            </div>
            
            <div className="home__row">
                <Product 
                  id="7382049824"
                  title = "Brayden Fito Kup-G Rechargeable Power Blender with 7.4V Motor & Transparent Glass Jar, 300 ml (Cool Blue)"
                  image = "https://m.media-amazon.com/images/I/61tmbwkbXiL._SX679_.jpg" 
                  price = {19.99}
                  rating = {4}
                />
                <Product 
                  id="23189949414"
                  title = "boAt Wave Lite Smartwatch with 1.69 Inches HD Display, Heart Rate & SpO2 Level Monitor, 140+ Watch Faces, Activity Tracker, Multiple Sports Modes & IP68(Active Black)"
                  image = "https://m.media-amazon.com/images/I/61+4BA2lt8L._AC_UY327_FMwebp_QL65_.jpg" 
                  price = {89.99}
                  rating = {5}
                />
                <Product 
                  id="3802141441"
                  title = "Samsung Galaxy M33 5G (Deep Ocean Blue, 8GB, 128GB Storage) | Travel Adapter to be Purchased Separately"
                  image = "https://m.media-amazon.com/images/I/81xvGbBFNhL._SX679_.jpg" 
                  price = {300.99}
                  rating = {3}
                />
              
            </div>

            <div className="home__row">
                <Product 
                  id="468732949"
                  title = "OMH A-King | HI-FI | Home Dj Tower | Multimedia Speaker | 28000 Watts PMPO | Home Entertainment | Pack of (14)"
                  image = "https://m.media-amazon.com/images/I/91LphleAcyL._AC_UY327_FMwebp_QL65_.jpg" 
                  price = {2319.00}
                  rating = {5}
                />
            </div>
        </div>
    </div>
  )
}

export default Home