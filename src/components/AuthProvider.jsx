import React, { createContext,  useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase.config';


export const authContext = createContext(null);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const auth = getAuth(app)

    const googleProvider = new GoogleAuthProvider()

    const githubProvider = new GithubAuthProvider()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('currentUser : ', currentUser)
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
            }
        })
        return () => {
            unsubscribe()
        }
    } ,[])
    const userInfo = {
        createUser,
        signinUser,
        signOutUser,
        signInWithGoogle,
        signInWithGithub,
        user, 
        setUser,
        loading, 
        setLoading
    }


    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;