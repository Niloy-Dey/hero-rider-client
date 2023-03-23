import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Navbar from '../Navbar/Navbar';

const Profile = () => {
    
    const [user] = useAuthState(auth);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://hero-rider-server-7447.onrender.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }, [])

    const person = users.find(dbuser => dbuser?.email === user?.email);


    return (
        <div>
            <Navbar></Navbar>
            <p className='text-3xl text-indigo-500 font-bold text-center my-4'>
                See Your profile details 
            </p>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-col">
                    <div class="lg:w-4/6 mx-auto">
                       
                        <div class="flex flex-col sm:flex-row mt-10">
                            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                   <img className='rounded' src={person?.profilePicture } alt="" />
                                </div>
                                <div class="flex flex-col items-center text-center justify-center">
                                    <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{person?.name}</h2>
                                    <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p>Email: {person?.email} </p>
                                    <p>Password: {person?.password} </p>
                                    <button className='btn btn-sm bg-indigo-500'>Update Profile</button>
                                    {/*  */}
                                </div>
                            </div>
                            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <div className='w-96 my-3 p-3'>
                                    <img className='w-full'  src={person?.nidPicture} alt="" />
                                </div>                                
                                <div className='w-96 my-3 p-3'>
                                    <img   className='w-full' src={person?.drivingLicencePicture} alt="" />
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;