import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const SignUp = () => {
    const { register, } = useForm();
    const [userHere, setUserHere] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const mobile = e.target.mobile.value;

        const userCreateData = { email, password, name, mobile };


        fetch('https://hero-rider-server-7447.onrender.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userCreateData)
        })


            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setUserHere(data.name);
                    console.log("form submitted successfully")
                }
            })



    }
    return (
        <div>
            <Navbar user={userHere}></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/g6XZYFw/inside-view-huge-breaking-wave-sea-mentawai-islands-indonesia.jpg")` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center">
                    <div className="px-5">
                        <h1 className="mb-5 text-4xl font-bold  text-[#E8F0FE]">Sign Up</h1>


                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body ">
                                <div class="flex items-center justify-between  p-3 m-0">
                                    <Link to="/riderSignUp" class="  active:bg-violet-700 text-black focus:bg-info focus:text-white p-2 btn btn-info ">Rider</Link>
                                    <Link to="/lessonLearnerSignUp" class=" active:bg-violet-700 text-black focus:bg-info focus:text-white p-2  btn btn-success">Driving Lesson Learner</Link>
                                </div>
                                <div class="card-actions justify-center">
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>

        </div >
    );
};

export default SignUp;