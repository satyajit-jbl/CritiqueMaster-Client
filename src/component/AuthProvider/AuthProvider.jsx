import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

import React, { createContext, useEffect, useState } from 'react';
// import app from '../../firebase/firebase.config';
import app from '../../firebase/firebase.config';
import axios from 'axios';
import { tr } from 'framer-motion/client';



export const authContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    // console.log(children);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    // console.log(loading, user);
    // console.log(user);

    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
        // console.log(auth, googleProvider);
    }

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        // setUser(null);
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (updatedData) => {
        // console.log(updatedData);
        return updateProfile(auth.currentUser, updatedData)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)

    }

    const userLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async currentUser => {
            // setUser(currentUser);
            // setLoading(false);
            if (currentUser?.email) {
                setUser(currentUser)
                //generate token
                const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,
                    {
                        email: currentUser?.email,
                    },
                    { withCredentials: true }
                )
                console.log(data);

            } else {
                setUser(currentUser);
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logout`,
                    
                    { withCredentials: true }
                )
            }
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, []);

    const authInfo = {
        user,

        setUser,
        createNewUser,
        logOut,
        userLogIn,
        loading,
        updateUserProfile,
        handleGoogleLogin,
        resetPassword,
    };


    return (
        <div>
            <authContext.Provider value={authInfo}>
                {
                    children
                }
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;