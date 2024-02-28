import React from 'react'

function Navbar() {
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
          <button className='mr-10 bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded-2xl'>Register</button>
          <button className='mr-10 bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded-2xl'>Login</button>
        </div>
    </nav>
  )
}

export default Navbar