import React, { useEffect } from 'react'
import Netflix_Logo from '../assets/Netflix_Logo_PMS.png'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../store/userSlice';

const Header = () => {

    const user = useSelector((store)=>store.user);
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const handleSignOut = () => {
    
        signOut(auth)
            .then(() => {
                
            })
            .catch((error) => {
                navigate('/error')
            });

    }
    
     useEffect(() => {
         onAuthStateChanged(auth, (user) => {
             if (user) {
                 const { uid, displayName, email, photoURL } = user;
                 dispatch(
                     addUser({
                         uid: uid,
                         displayName: displayName,
                         email: email,
                         photoURL: photoURL,
                     })
                 );

                 navigate('/browse')
             } else {
                 dispatch(removeUser());
                 navigate("/");
             }
         });
     }, []);

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-60" src={Netflix_Logo} alt="Netflix_Logo" />

            {user && (
                <div className="flex p-2">
                    <img
                        className="w-12 h-12"
                        src="https://media.licdn.com/dms/image/D4D03AQEzeJEludrHSg/profile-displayphoto-shrink_400_400/0/1673032234941?e=1703721600&v=beta&t=5ZGnYT4yaOauyIbAi9W6fImX9fIOvq9W9pKq1BYtqsg"
                        alt="profileImage "
                    />
                    <button
                        onClick={handleSignOut}
                        className="font-bold pb-3 text-white"
                    >
                        (Sign Out)
                    </button>
                </div>
            )}
        </div>
    );
}

export default Header
