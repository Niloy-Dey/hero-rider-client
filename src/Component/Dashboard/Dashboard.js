import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {


    const [users, setUsers] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = users.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(users.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);


    useEffect(() => {
        fetch('https://hero-rider-server-7447.onrender.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }, [])






    const handleDelete = (_id) => {

        const url = `https://hero-rider-server-7447.onrender.com/userDeleteRequest/${_id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('You want to deleted this user');
                    const remainingRequests = users.filter(request => request._id !== _id)
                    setUsers(remainingRequests);
                }
            })

    }

    const handleUpdatedStatus = (_id) => {
        alert('Sure, You want to block the user');
        const url = `https://hero-rider-server-7447.onrender.com/blockUser/${_id}`;
        const updatedStatus = 'Blocked';
        const updatedUser = { userstatus: updatedStatus }
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
    }


    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    const changePage = (id) => {
        setCurrentPage(id);

    }
    const nextPage = () => {
        if (currentPage !== nPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    const [nameSearch, setNameSearch] = useState('')
    const [emailSearch, setEmailSearch] = useState('')
    const [mobileSearch, setMobileSearch] = useState('')
    const [age, setAge] = useState('');



    console.log(age);
    return (
        <div className='text-center'>
            <Navbar></Navbar>
            <p className='text-xl text-center text-indigo-500 py-2 ' >Here searching method will work only for the single page you are on</p>
            <div className='flex justify-between items-center mx-3 '>
                <input onChange={(e) => setNameSearch(e.target.value)} className='p-2 outline mx-3 my-3 border w-full ' type="text" name="nameSearch" placeholder='Searching By name ' id="" />
                <input onChange={(e) => setEmailSearch(e.target.value)} className='p-2 outline mx-3 my-3 border w-full ' type="text" name="emailSearch" placeholder='Searching By email ' id="" />
                <input onChange={(e) => setMobileSearch(e.target.value)} className='p-2 outline mx-3 my-3 border w-full ' type="text" name="mobileSearch" placeholder='Searching By mobile number ' id="" />
                {/* <button className='btn mx-3  btn-outline btn-sm '>Search</button> */}


                <select onChange={(e) => setAge(e.target.value)} className="select btn-outline btn w-full max-w-xs">
                    <option value='' selected>
                        search By Age
                    </option>
                    <option value="18-25">18-25</option>
                    <option value="26-30">26-30</option>
                    <option value="31-35">31-35</option>
                </select>





            </div>
            <div class="overflow-x-auto w-full">
                <table class="table w-full ">
                    <thead className='bg-slate-700 '>
                        <tr className='w-full '>
                            <th>Select</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>vehicleType</th>
                            <th>Mobile</th>
                            <th>age</th>
                            <th>actions</th>

                        </tr>
                    </thead>
                    <tbody>


                        {

                            records.filter((u) => {
                                return (
                                    (nameSearch.toLowerCase() === "" ? u : u.name.toLowerCase().includes(nameSearch)) && 
                                    (emailSearch.toLowerCase() === "" ? u : u.email.toLowerCase().includes(emailSearch)) &&
                                    (mobileSearch.toLowerCase() === "" ? u : u.phone.toLowerCase().includes(mobileSearch))
                                )
                                    && (
                                        !age ||
                                        (age === "18-25" && u.age >= 18 && u.age <= 25) ||
                                        (age === "26-30" && u.age >= 26 && u.age <= 30) ||
                                        (age === "31-35" && u.age >= 31 && u.age <= 35)

                                    )

                            })
                                .map((user) =>

                                    <tr key={user._id} className=' bg-slate-700'>
                                        <th>
                                            <label>
                                                <input type="checkbox" class="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div class="flex items-center space-x-3">

                                                <div>
                                                    <div class="font-bold">{user.name}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="">{user.email} </td>
                                        <td>{user.role} </td>
                                        <td>{user.vehicleType} </td>
                                        <td>{user.phone}</td>
                                        <td>{user.age}</td>

                                        <td>
                                            <button onClick={() => handleDelete(user._id)} className='bg-indigo-500 btn btn-xs m-1 text-white'>Delete</button>
                                            <button onClick={() => handleUpdatedStatus(user._id)} className='bg-indigo-500 btn btn-xs m-1 text-white'>{user.userstatus}</button>
                                        </td>

                                    </tr>
                                )
                        }

                    </tbody>


                </table>
            </div>




            <div className='pagination my-10 '>
                <button onClick={prePage} className='page-item btn btn-outline btn-info mx-1 '>
                    Prev
                </button>
                {
                    numbers.map((n, i) => (
                        <button onClick={() => changePage(n)} className={`page-link btn btn-outline btn-info mx-1 ${currentPage === n ? 'active' : ''}`} key={i}>
                            {n}
                        </button>
                    ))
                }
                <button onClick={nextPage} className='page-item btn btn-outline btn-info mx-1'>
                    Next
                </button>
            </div>


        </div>
    );
};

export default Dashboard;