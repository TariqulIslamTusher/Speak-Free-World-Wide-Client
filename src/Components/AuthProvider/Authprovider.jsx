import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase.init";
import { getRole } from "../../api/AuthJS/auth";
import useAxiosSecure from "../../CustomHook/AxiosHook/useAxiosSecure";
import axios from "axios";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()


const Authprovider = ({ children }) => {
    const [AxiosSecure] = useAxiosSecure()
    const [user, setUser] = useState('')
    const [role, setRole] = useState(null)

    useEffect(() => {
        if (user) {
            getRole(user.email)
                .then(data => {
                    setRole(data)
                    // console.log(data);
                })
        }
    }, [user])

    // Loading spinner
    const [loader, setLoader] = useState(true)

    const createAcctWithEmail = (email, password) => {
        // setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginWithEmail = (email, password) => {
        // setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const signOutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {
            setUser(currUser)
            if (currUser?.email) {
                // fetch('https://speak-free-server.vercel.app/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify({ email: currUser?.email })
                // }).then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //         localStorage.setItem('access-token', data.token)
                //     })

                AxiosSecure.post('/jwt', { email : currUser.email}) 
                .then(data=>{
                    localStorage.setItem('access-token', data.data.token)
                    setLoader(false)
                })
            } else{
                localStorage.removeItem('access-token')
                setLoader(false)
            }
            console.log(currUser)

        })
        return () => {
            return unsubscribe()
        }
    }, [])



    const authInfo = {
        user,
        setUser,
        signOutUser,
        LoginWithEmail,
        createAcctWithEmail,
        loader, setLoader,
        handleGoogle,
        role, setRole
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;