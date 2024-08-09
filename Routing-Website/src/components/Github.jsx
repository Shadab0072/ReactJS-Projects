import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useLoaderData } from 'react-router-dom'


const Github = () => {

    const data = useLoaderData();

  return (
   <>
    <Header/>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
     followers: {data.followers}
    </div>

     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
     
     following: {data.following}</div>

     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
     
     Username: {data.login}</div>

     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
     
     Image: 
     <img src={data.avatar_url} alt="" /></div>
    <Footer/>
   </>
  )
}

export default Github



export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Shadab0072')
    const data = await response.json()
    return data
}

