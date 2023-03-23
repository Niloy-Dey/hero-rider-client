import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const LessonPackage = () => {

    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        fetch('https://hero-rider-server-7447.onrender.com/lessons')
            .then(res => res.json())
            .then(data => {
                setLessons(data);
            });
    }, [])



    return (
        <div>
            <Navbar></Navbar>

            <p className='text-3xl font-bold text-indigo-600 text-center pt-10'>Special Packages for You!!</p>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap -m-4">

                        {
                            lessons?.map(lesson =>
                                <div class="p-4 lg:w-1/2 md:w-full ">
                                    <div class="flex shadow-lg border-2  rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                        <div class="w-16 bg-white h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                                            <img src={lesson?.image} alt="" />
                                        </div>
                                        <div class="flex-grow">
                                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{lesson?.name} </h2>
                                            <p class="leading-relaxed text-base">{lesson?.details}</p>
                                            <p className='text-indigo-500 font-bold text-xl '>$ {lesson?.price} </p>
                                            <Link to={`/payment/${lesson._id}`} class="mt-3 text-indigo-500 inline-flex items-center">Buy Now
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                      
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LessonPackage;