import React from 'react';
import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-700 to-pink-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold hover:text-purple-200 transition">
          BlogSpace
        </Link>
        <div className="flex gap-4">
          {/* <Link to="/admin" cclassName="flex items-center gap-2 bg-white text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-100 transition"> <PlusCircle size={20} /> Dashboard</Link> */}
          <Link to="/" className="flex items-center gap-2 bg-white text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-100 transition">
            Preview User
          </Link>
          <Link to="/admin" className="flex items-center gap-2 bg-white text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-100 transition">
            Dashboard
          </Link>
          <Link to="/new-post" className="flex items-center gap-2 bg-white text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-100 transition">
            <PlusCircle size={20} />
            New Post
          </Link>
        </div>
      </div>
    </nav>
  );
}