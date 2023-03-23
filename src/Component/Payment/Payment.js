import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1TBvKBCH3RVVMg0tuXfOuf7eeU5CWWeE60MVx3alE2gM1XuFwuffe4l7sNDgUR9GqrK2kzT7cANLBENNxIfXHp00q4rx8ELC');
const Payment = () => {

    const { id } = useParams()
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        fetch('https://hero-rider-server-7447.onrender.com/lessons')
            .then(res => res.json())
            .then(data => {
                setLessons(data);
            });
    }, [])
    const clickedLesson = lessons?.find(le => le?._id === id);
    const { _id, name, image, details, price, } = clickedLesson || {};

    return (
        <div>
            <Navbar></Navbar>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={image} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"><span className='text-indigo-600'>Pay For</span> {name}
                        </h1>
                        <p className="text-2xl  font-bold text-success">Please Pay: {price}</p>
                        <p class="mb-8 leading-relaxed">{details}.</p>
                        <div class="flex justify-center">
                            <div className='card w-96 '>

                                <Elements stripe={stripePromise}>
                                    <CheckoutForm clickedLesson={clickedLesson} />
                                </Elements>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Payment;