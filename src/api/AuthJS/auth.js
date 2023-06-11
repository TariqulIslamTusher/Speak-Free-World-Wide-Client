import { useQueries } from "@tanstack/react-query";
import useAxiosSecure from "../../CustomHook/AxiosHook/useAxiosSecure";

// save a user to database 
export const saveUserToDB = user => {
    console.log(user);
    const currUser = {
        userPhoto: user.photoURL,
        userName: user.displayName,
        userEmail: user.email,
        role: 'user',

    }


    fetch(`http://localhost:3000/users/${user.email}`, {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(currUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
}

// TODO
// export const userRole = (user) =>{
//     const [AxiosSecure] = useAxiosSecure()

//     const { isLoading, data } = useQueries({
//         queryKey: ['users'],
//         queryFn: async () => {
//             const res = await AxiosSecure.get(`/users?email=${user.email}`)
//             return res.data[0]
//         }
//     })
// }