import Image from 'next/image';
import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-800 text-white">
      <h1 className="text-6xl font-bold mb-9 text-yellow-500">Profile</h1>
      <div className="ml-10 top-0 md:top-4 md: h-70 w-70 rounded-full overflow-hidden shadow-lg">
        <Image src="/images/userprofile.png" alt="Profile" width={200} height={200} />
      </div>
      <div className="items-center mb-20">
        <span className="font-bold w-24 text-lg">Company Name:</span>
        <input
          type="text"
          placeholder="Enter company name"
          className="border-yellow-500 border-2 focus:border-gray-300 rounded-md px-80 py-9 bg-transparent text-white ml-8"
        />
      </div>
      <div className="items-center mb-6">
        <span className="font-bold w-24 text-lg">Type of Waste:</span>
        <input
          type="text"
          placeholder="Enter type of waste"
          className="ml-12 border-yellow-500 border-2 focus:border-gray-300 rounded-md px-80 py-9 bg-transparent text-white"
        />
      </div>
      {/*
        Wrap the company descriptions in a div with shadow-lg class or custom styles
      */}
      
      {/*
        Repeat this structure for other company descriptions
      */}
      <div className="flex flex-row items-center mb-6">
        <span className="font-bold w-24 text-lg">Location:</span>
        <input
          type="text"
          placeholder="Enter location"
          className="ml-20 border-yellow-500 border-2 focus:border-gray-300 rounded-md px-80 py-9 bg-transparent text-white"
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-green-900 hover:bg-yellow-600 text-white font-bold py-7 px-10 rounded mr-6">Message</button>
        <button className="bg-green-900 hover:bg-yellow-600 text-white font-bold py-7 px-10 rounded">View Products</button>
      </div>
    </div>
  );
};

export default Profile;
