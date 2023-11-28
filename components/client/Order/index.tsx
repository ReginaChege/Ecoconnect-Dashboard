'use client'
import { useState } from 'react';
import Image from 'next/image';
import { escape } from 'querystring';
import Link from 'next/link';

const Order = () => {
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [quantity, setQuantity] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [order, setOrder] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);

  const handleOrderClick = () => {
    console.log('Ordered');
    console.log('Delivery Location:', deliveryLocation);
    console.log('Quantity:', quantity);
    console.log('Total Amount:', totalAmount);
  };

  const handleOrderOnClick = () => {
    if (isOrdered) {
      setOrder(true);
    } else {
      alert("Please place your order");
    }
  };

  return (
    <div>
      <div style={{ height: '75vh', display: 'flex' }} className=" mt-20">
        <img src="./Images/foodwrappers.jpeg" className="w-full " />
      </div>

      <div className="flex justify-center h-screen mt-16">
        <div className="bg-white p-4 rounded-lg text-center">
          <div className="text-[#086116] text-2xl font-bold mb-4">Water bottle from TakaTaka</div>
          <div className="text-[#086116] text-xl font-semibold my-2">10 tonnes</div>
          <div className="text-black text-xl font-semibold my-2">
            <label htmlFor="deliveryLocation">Delivery Location</label>
            <input
              type="text"
              name="deliveryLocation"
              value={deliveryLocation}
              onChange={(e) => setDeliveryLocation(e.target.value)}
              className="border border-yellow-500 p-2 rounded-lg w-full bg-slate-100"
              style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="text-black text-xl font-semibold my-2">
            <label>Quantity</label>
            <input
              type="text"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border border-yellow-500 p-2 rounded-lg w-full"
              style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <div className="text-black text-xl font-semibold my-2">
            <label>Total Amount</label>
            <input
              type="text"
              name="totalAmount"
              value={totalAmount}
              onChange={(e) => setTotalAmount(e.target.value)}
              className="border border-yellow-500 p-2 rounded-lg w-full"
              style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
            />
          </div>

          <div className="flex justify-center mt-6">
            <Link href="/category"><button className="bg-[#086116] text-white font-bold text-sm px-4 py-2 rounded-lg"   onClick={handleOrderClick}>
              Order
            </button>
            </Link>
            <div>
              {isOrdered && (

                <div className='text-black-200 font-poppins mb-2'>
                  Order placed successfully

                  
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
