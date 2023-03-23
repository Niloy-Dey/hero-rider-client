import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Navbar from '../Navbar/Navbar';

const LessonLearnerSignUp = () => {


    const [loginData, setLoginData] = useState({});
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (user) {
        console.log(user);

    }



    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        const userData = {
            role: 'drivingLessonLearner',
            email: data.email,
            name: data.name,
            age: data.age,
            address: data.address,
            phone: data.phone,
            profilePicture: data.profilePicture,
            nidPicture: data.nidPicture,
            password: data.password,
            confirmPassword: data.confirmPassword,
            vehicleType: data.vehicleType,
            userstatus: 'block',

        }

        setLoginData(userData);

        fetch('https://hero-rider-server-7447.onrender.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(" user data submitted successfully")
                }
            })
        navigate('/lessonPackage');
    }





    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://wallpaperaccess.com/full/16692.jpg")` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center">
                    <div className="px-5">
                        <h1 className="mb-5 text-2xl font-bold  text-[#E8F0FE]">Driving Lesson Learner Sign Up</h1>




                        <div class="card w-96 lg:w-[600px] shadow-xl">
                            <div class="card-body ">
                                <div class="flex items-center justify-between border-b-4 border-indigo-500 p-1">
                                    <Link to="/riderSignUp" class=" w-full mr-1"><button class="p-2 btn w-full active:bg-violet-700 text-white font-bold  focus:bg-info focus:text-white " >Rider</button> </Link>
                                    <Link to="/lessonLearnerSignUp" class="w-full  "> <button class="p-2 btn w-full active:bg-violet-700 text-white font-bold focus:bg-info focus:text-white " > Driving Lesson Learner </button></Link>
                                </div>
                                <div class="card-actions justify-center">
                                    <form className="text-black w-full" onSubmit={handleSubmit(onSubmit)}  >
                                        <div className="flex justify-between   ">
                                            <input
                                                type="text"
                                                placeholder="Enter Your FullName"
                                                className="input w-full input-sm outline-node  my-2 mx-1"
                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: 'Name is Required'
                                                    }
                                                })}
                                            />


                                            <input
                                                type="email"
                                                placeholder="Enter Your Email"
                                                className="input w-full input-sm outline-node  my-2 mx-1"
                                                {...register("email", {
                                                    required: {
                                                        value: true,
                                                        message: 'Email is Required'
                                                    },
                                                    pattern: {
                                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                        message: 'Provide a valid Email'
                                                    }
                                                })}
                                            />
                                        </div>


                                        <div className="flex justify-between   ">
                                            <input
                                                type="number"
                                                placeholder='Enter Your Age'
                                                className="input w-full input-sm outline-node  my-2 mx-1"
                                                {...register("age", {
                                                    required: {
                                                        value: true,
                                                        message: 'age is Required'
                                                    }
                                                })}
                                            />

                                            <input
                                                type="text"
                                                placeholder='Enter Your Address'
                                                className="input w-full input-sm outline-node  my-2 mx-1"
                                                {...register("address", {
                                                    required: {
                                                        value: true,
                                                        message: 'address is Required'
                                                    }
                                                })}
                                            />
                                        </div>

                                        <div className="flex">
                                            <input
                                                type="phone"
                                                placeholder='Enter Your Phone'
                                                className="input w-full input-sm outline-node  my-2 mx-1"
                                                {...register("phone", {
                                                    required: {
                                                        value: true,
                                                        message: 'phone is Required'
                                                    }
                                                })}
                                            />
                                        </div>

                                        <div className="flex">
                                            <input
                                                type="text"
                                                placeholder='Enter Your Profile picture url'
                                                className="input w-full input-sm outline-node  my-2 mx-1"
                                                {...register("profilePicture", {
                                                    required: {
                                                        value: true,
                                                        message: 'drivingLicence is Required'
                                                    }
                                                })}
                                            />
                                        </div>



                                        <div className="flex   ">
                                            <input
                                                type="text"
                                                placeholder='Enter Your  NID picture url'
                                                className="input w-full input-sm outline-node  my-2 mx-1"
                                                {...register("nidPicture", {
                                                    required: {
                                                        value: true,
                                                        message: 'Nid picture is Required'
                                                    }
                                                })}
                                            />


                                        </div>


                                        <div className="flex justify-between   ">
                                            <input
                                                type="password"
                                                placeholder="Enter Password"
                                                className="input w-full input-sm outline-node  my-2 mx-1"
                                                {...register("password", {
                                                    required: {
                                                        value: true,
                                                        message: 'Password is Required'
                                                    },
                                                    minLength: {
                                                        value: 6,
                                                        message: 'Must be 6 characters or longer'
                                                    }
                                                })}
                                            />
                                            <input
                                                type="password"
                                                placeholder="Confirm Password"
                                                className="input w-full input-sm outline-node  my-2 mx-1"
                                                {...register("confirmPassword", {
                                                    required: {
                                                        value: true,
                                                        message: 'Password is Required'
                                                    },
                                                    minLength: {
                                                        value: 6,
                                                        message: 'Must be 6 characters or longer'
                                                    }
                                                })}
                                            />
                                        </div>


                                        <select  class="select w-full select-bordered select-sm  my-1" {...register("vehicleType")}>
                                            <option value="Car">Car</option>
                                            <option value="Bike">Bike</option>
                                        </select>


         
                                        <input className='btn w-full btn-sm text-white' type="submit" value="Sign Up" />
                                    </form>
                                    <p className='text-white'><small>All ready have an Account <Link className='text-primary' to="/signIn"> SignIn</Link></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default LessonLearnerSignUp;