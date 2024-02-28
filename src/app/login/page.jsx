"use client"
import React, { useState } from "react";

function page() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Submitted:', { name, email });
    // You can send the form data to your server or perform any other actions
  };

  return (
<div className="bg-black w-full h-screen text-white flex items-center justify-center">

<div className="h-[40%] w-[50%] border-2 border-white ml-[5%] flex">
  <form className="flex flex-col justify-center w-[80%] h-[100%] ml-16 text-black" onSubmit={handleSubmit}>
    <input
      type="text"
      id="name"
      name="name"
      value={name}
      onChange={handleNameChange}
      required
      minLength={2}
      maxLength={50}
      placeholder="Name"
      className="w-full h-[20%] mb-4 px-2 py-1 border border-white rounded "
    />
    <input
      type="email"
      id="email"
      name="email"
      value={email}
      onChange={handleEmailChange}
      required
      placeholder="Email"
      className="w-full h-[20%] mb-4 px-2 py-1 border border-white rounded"
    />
    
    <button type="submit" className="w-full py-2 bg-white text-black font-bold rounded">
      Login
    </button>
  </form>
</div>

</div>
  )
}

export default page