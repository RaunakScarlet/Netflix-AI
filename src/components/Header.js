import React, { useEffect } from 'react'
import Netflix_Logo from '../assets/Netflix_Logo_PMS.png'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../store/userSlice';
import { SUPPORTED_LANGUAGE, USER_PROFILE } from '../utils/constants';
import { toggleMode } from '../store/aiModeSlice';
import { toggleLanguage } from '../store/languageConfigSlice';

const Header = () => {

    const user = useSelector((store) => store.user);
    const aiModeEnable = useSelector((store) => store.aiMode.mode);
    
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
    
    const handleAiMode = () => {
        dispatch(toggleMode());
    }
    const handleLanguage = (e) => {
dispatch(toggleLanguage(e.target.value));
         console.log(e.target.value);
    }
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44 cursor-pointer" src={Netflix_Logo} alt="Netflix_Logo"
                onClick={
               ()=> window.location.href = '/' 
            }/>

            {user && (
                <div className="flex p-2">
                    {
                        aiModeEnable &&
                        (<select
                        onChange={handleLanguage}
                        className="p-2 m-2 bg-gray-900 text-white"
                    >
                        {SUPPORTED_LANGUAGE.map((lang) => (
                            <option
                                key={lang.identifier}
                                value={lang.identifier}
                            >
                                {lang.name}
                            </option>
                        ))}
                        </select>)
                    }
                    <button
                        onClick={handleAiMode}
                        className=" py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
                    >{aiModeEnable?"Home":"AI Mode"}   
                    </button>
                    <img
                        className="w-12 h-12"
                        src={USER_PROFILE}
                        alt="profileImage "
                    />
                    <button
                        onClick={handleSignOut}
                        className="font-bold text-white"
                    >
                        (Sign Out)
                    </button>
                </div>
            )}
        </div>
    );
}

export default Header
