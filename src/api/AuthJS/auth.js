// save a user to database 

import useAxiosSecure from "../../CustomHook/AxiosHook/useAxiosSecure"


export const saveUserToDB = user => {
    const [AxiosSecure] =useAxiosSecure()
    const currUser = {
        email: user.email
    }
    AxiosSecure.put(`/users/${user.email}`)
        .then(res => console.log(res))
        .catch(err => {
            console.log(err)
        })
}