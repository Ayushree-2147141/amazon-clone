import React, {useState, useEffect} from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import {useStateValue} from "./StateProvider";
import {Link} from "react-router-dom";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from './reducer';
import { useNavigate } from 'react-router-dom';
import axios from './axios';



function Payment() {
    const [{ basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded,setSucceeded] = useState(false);
    const [processing,setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const navigate = useNavigate();

    useEffect(() =>{
        //generate special stripe secret which allows us to change a customer
        
        const getClientSecret = async() =>{
            const response = await axios({
                method : 'post',
                url : `/payments/create?total=${getBasketTotal(basket) * 100 }`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) =>{
        //do all the fancy stripe stuff
        event.preventDefault();
        setProcessing(true);

        // const payload = await stripe.confirmCardPayment(clientSecret, {
        //     payment_method : {
        //         card : elements.getElement(CardElement)
        //     }
        // })
        // .then(({ paymentIntent }) => {
        //     //paymentIntent = payment confirmation

        //     setSucceeded(true);
        //     setError(null);
        //     setProcessing(false);

        //     dispatch({
        //         type: 'EMPTY_BASKET'
        //     })        
            
        // })
        dispatch({
            type:'EMPTY_BASKET'
        });

        alert('Payment successful!');

        navigate('/orders', {replace: true});

    }

    const handleChange = e =>{
        //listen for changes in the CardElement 
        // and display any errors as the customer types their card details
        // setDisabled(event.empty);
    }

  return (
    <div className="payment">
        <div className="payment__container">
            <h1>
                Checkout {<Link to="/checkout">{basket?.length} items</Link>}
            </h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>
                        Review items and delivery
                    </h3>
                </div>
                <div className='payment__items'>
                    
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        
                        />
                    ))}
                    
                </div>

            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>
                        Payment Method
                    </h3>
                </div>
                <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            {/* <CreditCardInput
                                cardNumberInputProps={{ value: cardNumber, onChange: this.handleCardNumberChange }}
                                cardExpiryInputProps={{ value: expiry, onChange: this.handleCardExpiryChange }}
                                cardCVCInputProps={{ value: cvc, onChange: this.handleCardCVCChange }}
                                fieldClassName="input"
                            /> */}
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                    <>
                                        <h3>Order Total : {value}</h3>
                                    </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} // Part of the homework
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                            
                                {/* <button disabled={processing || disabled || succeeded}> */}
                                <button>
                                    <span>
                                        {processing ? <p>Processing</p>: "Buy Now"}
                                    </span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Payment