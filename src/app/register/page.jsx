"use client";

import React from "react";

function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-0">
      <div className="flex flex-col items-center w-1/4 h-1/2 pt-40 pb-40">
        <div className="mb-10">Register Page</div>
        
        <div className="flex flex-col justify-between">

          <div>
            <div>Name</div>
            <input type="text" placeholder="Enter your full name" />
          </div>

          <div>
            <div>Username</div>
            <input type="text" placeholder="Enter a username" />
          </div>

          <div>
            <div>Email address</div>
            <input type="email" placeholder="Enter your email address" />
          </div>

          <div>
            <div>Password</div>
            <input type="password" placeholder="Set Your password" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default page;
