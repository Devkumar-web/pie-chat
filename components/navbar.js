"use client"
import React from 'react'
// components/Navbar.js
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
//import { useUser } from '@clerk/nextjs';

export default function Navbar() {
  //const user=useUser()
      
  return (
    
    <nav className="bg-gray-800 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          PieChat
        </Link>
        <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-300 hover:text-white">
            Home </Link>
          <Link href="/forums" className="text-gray-300 hover:text-white">
            forums
          </Link>
          <Link href="/chat" className="text-gray-300 hover:text-white">
            User-chat
          </Link>
          <UserButton/>
          {/* Add authentication related links here, e.g., Login/Logout */}
        </div>
      </div>
    </nav>
  );
}