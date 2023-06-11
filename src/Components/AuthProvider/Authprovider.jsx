import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase.init";
import { getRole } from "../../api/AuthJS/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()


const Authprovider = ({ children }) => {

    const [user, setUser] = useState('')
    const [role, setRole] = useState(null)

    useEffect(()=>{
        if(user){
            getRole(user.email)
            .then(data => {
                setRole(data)
                // console.log(data);
            })
        }
    },[user])

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

            console.log(currUser)
            setLoader(false)

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