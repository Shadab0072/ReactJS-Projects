import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/UserContext'

function Profile() {
    
    const {user} = useContext(MyContext)

    return <div>Welcome {user.username} & Password:{user.password}</div>

}

export default Profile