import React from 'react';

function RequestHelpPage() {
  return (
    <div className="container mx-auto p-8 flex min-h-screen items-center">
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <p className="text-gray-700 mb-4">
          In times of crisis, help is just a few steps away. If you or someone you know needs immediate assistance, please fill out the form below. Whether you need medical aid, shelter, food, or other resources, we’ll connect you with local responders and resources as quickly as possible.
        </p>
        <p className="font-bold text-gray-900">
          Your community is ready to help. We’re here to make sure you’re never alone in times of need.
        </p>
      </div>
      <div className="w-1/2 p-8 bg-white rounded-lg shadow-md ml-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Request Help</h1>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-left">First Name</label>
              <input type="text" required className="border p-2 w-full rounded" />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-left">Last Name</label>
              <input type="text" required className="border p-2 w-full rounded" />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-left">Phone</label>
            <input type="tel" className="border p-2 w-full rounded" />
          </div>
          <div>
            <label className="block text-gray-700 text-left">Country</label>
            <select className="border p-2 w-full rounded">
              <option>United States</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-left">Address Line 1</label>
            <input type="text" required className="border p-2 w-full rounded" />
          </div>
          <div>
            <label className="block text-gray-700 text-left">Address Line 2</label>
            <input type="text" className="border p-2 w-full rounded" />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/3">
              <label className="block text-gray-700 text-left">City</label>
              <input type="text" required className="border p-2 w-full rounded" />
            </div>
            <div className="w-1/3">
              <label className="block text-gray-700 text-left">State</label>
              <input type="text" required className="border p-2 w-full rounded" />
            </div>
            <div className="w-1/3">
              <label className="block text-gray-700 text-left">ZIP Code</label>
              <input type="text" required className="border p-2 w-full rounded" />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-left">Message</label>
            <textarea required className="border p-2 w-full rounded"></textarea>
          </div>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Send</button>
        </form>
      </div>
    </div>
  );
}

export default RequestHelpPage; 