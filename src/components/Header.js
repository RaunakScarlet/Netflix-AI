import React, { useEffect } from 'react'
import Netflix_Logo from '../assets/Netflix_Logo_PMS.png'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../store/userSlice';
import { USER_PROFILE } from '../utils/constants';

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
        const unsubscribe= onAuthStateChanged(auth, (user) => {
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
         
         return () => unsubscribe();
     }, []);

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-60" src={Netflix_Logo} alt="Netflix_Logo" />

            {user && (
                <div className="flex p-2">
                    <img
                        className="w-12 h-12"
                        src={USER_PROFILE}
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
