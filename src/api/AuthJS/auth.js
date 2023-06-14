
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



// Get the role of the user
export const getRole = async email => {
    const res = await fetch(`http://localhost:3000/users?email=${email}`)
    const data = await res.json()
    return data[0].role
   
}

// Get the role of the user
export const AllClassData = async () => {
    const res = await fetch('http://localhost:3000/onlyclass')
    const data = await res.json()
    return data
   
}