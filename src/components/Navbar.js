import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">CommunityCrisisAid</Link>
        <ul className="flex space-x-4">
          <li><Link to="/ask-for-help" className="text-white hover:text-blue-200">Ask for Help</Link></li>
          <li><Link to="/about" className="text-white hover:text-blue-200">About</Link></li>
          <li><Link to="/login" className="text-white hover:text-blue-200">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
