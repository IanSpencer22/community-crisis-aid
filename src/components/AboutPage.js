import React from 'react';

function AboutPage() {
  return (
    <div className="container mx-auto p-8 bg-green-50 rounded-lg shadow-md flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-green-700 text-center">How It Works</h1>
      <ol className="list-decimal list-inside space-y-4 text-gray-700 text-center">
        <li>
          <strong>Request Help</strong>
          <p>If you're facing an emergency, simply provide details about your situation, and we'll connect you with local resources and responders who can assist.</p>
        </li>
        <li>
          <strong>Offer Help</strong>
          <p>If you're a volunteer, responder, or organization ready to assist, log in to view requests from those in need and offer your support.</p>
        </li>
        <li>
          <strong>Real-Time Support</strong>
          <p>Stay updated with real-time alerts and notifications, ensuring that help is always just a click away.</p>
        </li>
      </ol>
    </div>
  );
}

export default AboutPage; 