import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const User = () => {
    const {userId} = useParams()
  return (
    <>
    <Header/>
    <div className='bg-gray-600 text-white text-3xl p-4'>User : {userId}</div>
    <Footer/>
    </>
  )
}

export default User
