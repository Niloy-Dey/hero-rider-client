import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CheckoutForm = ({ clickedLesson }) => {
    const user = useAuthState(auth)
    const person = user?.email;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [message, setMessage] = useState('')

    const { _id, name, image, details, price, } = clickedLesson || {};

    useEffect(() => {
        fetch(`https://hero-rider-server-7447.onrender.com/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price])

    const handleSubmit = async event => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }

        setSuccess('');
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: person,
                        price: price,

                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);

        }
        else {
            setCardError('');
            console.log(paymentIntent);
            setSuccess('Congratulation, your payment is completed')
        }

    }

const showMessage =e =>{
    setMessage('Congrates, Your payment completed');
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button onClick={showMessage} className='btn btn-sm my-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError ? <p className='text-red-500'> {cardError}</p>  :  <p className='text-green-500'> {message}</p>
            }
            {
               
            }
        </div>
    );
};

export default CheckoutForm;