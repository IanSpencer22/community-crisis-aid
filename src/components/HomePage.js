import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container mx-auto p-8 bg-blue-50 rounded-lg shadow-md flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-blue-700 text-center">Welcome to CommunityCrisisAid</h1>
      <p className="text-lg mb-6 text-gray-700 text-center">
        In times of disaster, health emergencies, or social crises, every second counts.
        <strong> CommunityCrisisAid </strong> is here to make sure that no one faces these challenges alone.
        Our platform connects individuals in need with local responders, volunteers, and resources, ensuring
        that help reaches those who need it most—when they need it most.
      </p>
      <Link to="/about">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Learn more</button>
      </Link>
    </div>
  );
}

export default HomePage; 