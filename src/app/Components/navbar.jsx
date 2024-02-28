'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
useRouter

function Navbar() {

  const router = useRouter();

  const navigate= (name)=>{
    router.push(name)
  }

  return (
    <nav className='flex justify-between w-full bg-black text-white p-4 text-ls'>
        <div className='flex items-center'>
            <ul className='flex justify-between'>
                <li className='ml-10'>Home</li>
                <li className='ml-10'>About</li>
                <li className='ml-10'>Contact</li>
            </ul>
        </div>

        <div className='flex justify-between'>
          <button className='mr-10 bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded-2xl' onClick={()=>{navigate('/register')}}>Register</button>
          <button className='mr-10 bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded-2xl' onClick={()=>{navigate('/login')}}>Login</button>
        </div>
    </nav>
  )
}

export default Navbar