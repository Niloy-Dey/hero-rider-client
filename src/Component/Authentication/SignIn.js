import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Navbar from '../Navbar/Navbar';

const SignIn = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const navigate = useNavigate();


    if (user ) {
        navigate('/home');
    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/g6XZYFw/inside-view-huge-breaking-wave-sea-mentawai-islands-indonesia.jpg")` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="px-5">
                        <h1 className="mb-5 text-4xl font-bold  text-[#E8F0FE]">Sign In</h1>

                        <div className="card p-4 text-black shadow-xl">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control w-full max-w-xs">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="input input-bordered  my-2 w-full input-sm"
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




                                <div className="form-control w-full max-w-xs">
                                    
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="input input-bordered my-2 w-full input-sm"
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
                                </div>
                                <input className='btn w-full my-2 btn-sm text-white' type="submit" value="Sign In " />
                            </form>
                            <p className='text-white'><small>If you don't have an account? please<Link className='text-primary' to="/home">SignUp</Link></small></p>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default SignIn;