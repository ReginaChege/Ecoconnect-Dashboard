


'use client'
import Link from 'next/link';
import React, { useState } from 'react';

  const subcategoryData: {
    plastics: {
      name: string;
      quantity: string;
      price: string;
      image: string;
    }[];
    metals: {
      name: string;
      quantity: string;
      price: string;
      image: string;
    }[];
    glassware: {
      name: string;
      quantity: string;
      price: string;
      image: string;
    }[];
    batteries: {
      name: string;
      quantity: string;
      price: string;
      image: string;
    }[];
    papers: {
      name: string;
      quantity: string;
      price: string;
      image: string;
    }[];
  } = {
    plastics: [
      { name: 'Plastic Bags', quantity: '5 tonnes', price: '$50', image: 'plasticbags.jpg' },
      { name: 'Water Bottles', quantity: '10 tonnes', price: '$100', image: 'waterbottle.png' },
      { name: 'Straws', quantity: '8 tonnes', price: '$80', image: 'straw.jpeg' },
      { name: 'Stirrers', quantity: '3 tonnes', price: '$30', image: 'stirres.jpg' },
      { name: 'Food Wrappers', quantity: '2 tonnes', price: '$20', image: 'foodwrappers.jpeg' },
      { name: 'Bottlecaps', quantity: '2 tonnes', price: '$20', image: 'bottlecaps.jpg' },
    ],
    metals: [
      { name: 'Non ferrous', quantity: '4 tonnes', price: '$40', image: 'Non ferrous.jpg' },
      { name: 'Ferrous', quantity: '6 tonnes', price: '$60', image: 'ferrous.jpeg' },
      { name: 'Lead', quantity: '3 tonnes', price: '$30', image: 'lead.jpeg' },
      { name: 'Iron', quantity: '5 tonnes', price: '$50', image: 'iron.jpeg' },
      { name: 'Brass', quantity: '2 tonnes', price: '$20', image: 'brass.jpeg' },
    ],
    glassware: [
      { name: 'Clear glasses', quantity: '3 tonnes', price: '$30', image: 'clearglasses.jpg' },
      { name: 'Colored glasses', quantity: '4 tonnes', price: '$40', image: 'glasses.jpg' },
    ],
    batteries: [
      { name: 'Alikaline batteries', quantity: '100 kg', price: '$200', image: 'alikaline batteries.jpg' },
      { name: 'LithiumBatteries', quantity: '50 kg', price: '$150', image: 'Lithium.jpeg' },
      { name: 'Wet Cell Batteries', quantity: '20 kg', price: '$100', image: 'wet cell.jpg' },
      { name: 'Laptop Batteries', quantity: '10 kg', price: '$80', image: 'dry cell.jpg' },
    ],
    papers: [
      { name: 'News papers', quantity: '100 kg', price: '$200', image: 'News papers.jpeg' },
      { name: 'Paper bags', quantity: '50 kg', price: '$150', image: 'paperbags.jpeg' },
      { name: 'Shredded papers', quantity: '20 kg', price: '$100', image: 'shreded papers.jpg' },
      { name: 'Advertising flyers', quantity: '10 kg', price: '$80', image: 'advertising flyers.jpg' },
      { name: 'Carboard boxes', quantity: '10 kg', price: '$80', image: 'carboard boxes.jpg' },
    ],
  };
  
interface SubcategoryPageProps {
  selectedSubcategory: string;
}
const SubcategoryName = ({ selectedSubcategory }: SubcategoryPageProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const subcategoryDetails = subcategoryData[selectedSubcategory as keyof typeof subcategoryData];

  const filteredSubcategories = Array.isArray(subcategoryDetails)
  ? subcategoryDetails.filter((subcategory: any) =>
      subcategory.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : [];

  const handleSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col items-center ml-20 -mt-36">
      <h2 className="text-2xl font-semibold    text-green-900">Categories: {selectedSubcategory}</h2>
      <div className="flex  w-1/2 h-89 ">
        
      <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="border-2 border-green-900 px-4 py-4 w-full mr-10 mt-10"
          style={{ borderRadius: '50px' }}
        />
      </div>
      <div className="flex flex-wrap justify-center mb-0">
        {filteredSubcategories.map((subcategory :any) => (
          <div key={subcategory.name} className="w-64 h-64 object-cover rounded-lg m-40">
            <img src={`/Images/${subcategory.image}`} alt={subcategory.name} className="w-full h-full object-cover rounded-lg" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{subcategory.name}</h3>
              <p>Quantity: {subcategory.quantity}</p>
              <p>Price: {subcategory.price}</p>
              <div className="flex justify-center mt-4">
                <button className=" w-40 border-2 border-green-900 text-green-900 px-6 py-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white">
                  Chat Now 
                </button>
                <button className=" w-50 border-2 border-green-900 text-green-900 px-6 py-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white">
                  <Link href="/order">Order</Link>
                </button>  
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubcategoryName;