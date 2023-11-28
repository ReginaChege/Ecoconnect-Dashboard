'use client'
import React, { useState } from 'react';

const Company = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openDropdowns, setOpenDropdowns] = useState({});
  const companies = [
    { id: 1, name: 'Colnet Limited', description: ' We recycle plastic' },
    { id: 2, name: 'Plenser Limited', description: 'We recycle organic waste' },
    { id: 3, name: 'Mason Services Ltd', description: 'We recycle metal' },
    { id: 4, name: 'Kamongo Waste Paper Ltd', description: 'We recycle Bothe plastic and metal' },
    { id: 5, name: 'Creative Consolidated Ltd', description: 'We colect waste and recycle it ' },
    { id: 6, name: 'Takataka Solution ', description: 'We recycle plastic and types of waste ' },
  ];

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = (companyId: number) => {
    setOpenDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [companyId]: !prevDropdowns[companyId],
    }));
  };

  const isInputActive = searchTerm.trim() !== ''; 

  return (
    <div className="bg-white-800 text-black min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center ">
          <div className="flex flex-col items-center justify-start flex-1">
            <h1 className="text-3xl font-bold mb-4">Company List</h1>

            <input
              type="text"
              placeholder="Search for companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`px-80 py-2 rounded-full border-none w-4/6 mb-8 text-xl border-green-900 -ml-11 ${isInputActive ? 'text-black' : ''}`}
              // Add text-black class if input is active
            />

            <ul className="list-disc list-inside">
              {filteredCompanies.map((company) => (
                <li key={company.id} className="text-lg mb-4">
                  <div className="cursor-pointer" onClick={() => toggleDropdown(company.id)}>
                    <span className="">{company.name}</span>
                    {openDropdowns[company.id] ? (
                      <span className="text-yellow-500">&#9650;</span>
                    ) : (
                      <span className="text-yellow-500">&#9660;</span>
                    )}
                  </div>
                  {openDropdowns[company.id] ? (
                    <div className="bg-green-900 p-2 rounded mt-2 relative">
                      <div className="ml-10 top-0 md:top-4 md: h-20 w-20 rounded-full overflow-hidden">
                        <img
                          src="/images/userprofile.png"
                          alt="Profile"
                          className="h-full w-full rounded-full"
                        />
                      </div>
                      <div className="w-96 mr-60">
                        {company.description}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-300 p-10 rounded mt-2 text-gray-500 ">
                      Placeholder for {company.name}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
