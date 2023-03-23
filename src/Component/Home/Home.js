import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>


            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.motorguider.com/wp-content/uploads/2022/08/Hero-Xtreme-160R-2022-Price-in-India-780x470.jpg")` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <section class="text-gray-600 body-font">
                        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            </div>
                            <div class="lg:flex-grow md:w-1/2 lg:pl-40 text-white md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold  ">Join With Us </h1>
                                <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over air tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                                <div class="flex justify-center">
                                    <Link to="/riderSignUp" class="inline-flex btn text-white  btn-success border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Rider</Link>
                                    <Link to="/lessonLearnerSignUp" class="ml-4 inline-flex btn btn-warning text-white hover:text-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Driving Lesson Learner.</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;