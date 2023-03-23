import { signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
const useUser = () =>{
    const logout = () => {
        signOut(auth);
    }
    const [users, setUsers] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(()=>{
        fetch('https://hero-rider-server-7447.onrender.com/users')
        .then(res => res.json())
        .then(data =>{
            setUsers(data);
        });
    } , [])

    const emailId = user?.email;
    const testPerson = users?.filter(user => emailId === user?.email)
    // console.log(testPerson)
    
    const person = testPerson[0];
    // console.log(person)
    return [person, setUsers];
}
export default useUser;