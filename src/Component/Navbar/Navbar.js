import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useUser from '../hooks/useUser';
// bg-[#CEEBF7]
const Navbar = () => {

    const logout = () => {
        signOut(auth);
    }

    const [user] = useAuthState(auth);

    const [person] = useUser();
    const personRole = person?.role;
 
    return (
        <div class="navbar bg-slate-900 text-white font-bold px-20">
            <div class="navbar ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact  bg-slate-900 text-white dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li> {user && <Link to="/profile"> Profile</Link> } </li>
                            
                            {
                                personRole === 'drivingLessonLearner' && <li><Link to='/lessonPackage'>Lesson</Link></li>
                            }
                            {
                                personRole === 'admin' && <li><Link to='/lessonPackage'>Lesson</Link></li>
                            }
                            {
                                personRole === 'admin' && <li><Link to='/dashboard'>Dashboard</Link></li>
                            }
                            <li>{user ? <Link onClick={logout} to="/">Sign Out</Link> : <Link to='/SignIn'>Sign In</Link>} </li>
                        </ul>
                    </div>
                    <Link  to="/" class="btn btn-ghost normal-case text-xl">Hero Rider</Link>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        <li><Link to='/home'>Home</Link></li>
                        <li> {user && <Link to="/profile"> Profile</Link> } </li>
                        {
                            personRole === 'drivingLessonLearner' && <li><Link to='/lessonPackage'>Lesson</Link></li>
                        }

                        {
                            personRole === 'admin' && <li><Link to='/lessonPackage'>Lesson</Link></li>
                        }
                        {
                            personRole === 'admin' && <li><Link to='/dashboard'>Dashboard</Link></li>
                        }
                        <li>{user ? <Link onClick={logout} to="/">Sign Out</Link> : <Link to='/SignIn'>Sign In</Link>} </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;