// 'use client'

// import React, { useState } from "react";
// import { FcSalesPerformance } from 'react-icons/fc';
// import { RiProductHuntLine } from 'react-icons/ri';
// import { AiFillProfile } from 'react-icons/ai';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
// import useGetOrders from "@app/hooks/useGetOrders"; 

// const Orders = () => {
//   const data = useGetOrders();

//   const orders: OrderData[] = data.order;

//   const [activeButton, setActiveButton] = useState<'weekly' | 'monthly'>('weekly');

//   const chartData = orders.map((order) => ({
//     name: order.product,
//     TotalOrders: +order.quantity,
//     TotalSales: order.total_price,
//   }));

//   const handleButtonClick = (buttonType: 'weekly' | 'monthly') => {
//     setActiveButton(buttonType);
//   };

//   return (
//     <div className="ml-96 flex flex-col items-left font-family-Poppins mb-8 ml-64">
//       <p className="ml-48">Eccoconnect</p>
//       <p className="ml-48">Look at what is happening with your stores' updates</p>

//       <div className="flex space-x-10 mt-10 ml-48">
//         <div className="border-4 p-4 max-w-lg rounded-lg text-black-400 bg-sky-500/100 flex items-center">
//           <FcSalesPerformance size={62} className="mx-auto" style={{ color: 'white' }} />
//           <button
//             className={`text-center space-y-2 text-white`}
//             onClick={() => handleButtonClick('monthly')}
//           >
//             <p className="">Total Sales</p>
//             <hr className="border-white" />
//           </button>
//         </div>
//         <div className="border-4 p-4 max-w-lg rounded-lg text-Slate-50 bg-blue-950 flex items-center">
//           <RiProductHuntLine size={62} className="mx-auto" style={{ color: 'white' }} />
//           <button
//             className={`text-center space-y-2 text-white`}
//             onClick={() => handleButtonClick('monthly')}
//           >
//             <p className="">Per Product</p>
//             <hr className="border-white" />
//           </button>
//         </div>
//         <div className="border-4 p-4 max-w-lg rounded-lg text-Slate-50 bg-blue-950 flex items-center">
//           <AiFillProfile size={62} className="mx-auto" style={{ color: 'white' }} />
//           <button
//             className={`text-center space-y-2 text-white`}
//             onClick={() => handleButtonClick('monthly')}
//           >
//             <p className="">Total product</p>
//             <hr className="border-white" />
//           </button>
//         </div>
//       </div>

//       <div className="ml-28 mt-10">
//         <p className="font-semibold font-Poppins text-3xl ml-64">Total Sales and Order Dynamics</p>
//         <div className="flex flex-row mr-8">
//           <div className="ml-[50px] font-family-Poppins">
//             <div className="bg-white-200 p-4 font-semibold rounded-lg flex flex-2 mt-2 border-1 mr-8">
//               <LineChart width={700} height={450} data={chartData}>
//                 <XAxis dataKey="name">
//                   <Label value={activeButton === 'monthly' ? "Time (months)" : "Months"} position="insideBottom" dy={12} />
//                 </XAxis>
//                 <YAxis domain={[0, 70000]}>
//                   <Label value="Orders / Sales" angle={-90} position="insideLeft" />
//                 </YAxis>
//                 <CartesianGrid stroke="#ccc" />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="TotalOrders" stroke="#E1AD01" name="Total Orders" />
//                 <Line type="monotone" dataKey="TotalSales" stroke="#013022" name="Total Sales" />
//               </LineChart>
//             </div>
//           </div>

//           <div>
//             <p className="text-yellow-500 text-[40px] font-semibold font-Poppins">Elite Customers</p>
//             <div className="flex flex-row space-x-16">
//               <p className="text-black text-[32px] font-medium font-Poppins">Company</p>
//               <p className="text-black text-[32px] font-medium font-Poppins">Sales</p>
//             </div>
//             <div className="flex flex-row space-x-8">
//               <div>
//                 <p className="text-black text-xl font-normal font-Poppins">Takataka Solutions</p>
//                 <p className="text-black text-xl font-normal font-Poppins">Pure Planet</p>
//                 <p className="text-black text-xl font-normal font-Poppins">Pure Planet</p>
//                 <p className="text-black text-xl font-normal font-Poppins">Takataka Solutions</p>
//                 <p className="text-black text-xl font-normal font-Poppins">Pure Planet</p>
//               </div>
//               <div>
//                 <p className="text-black text-xl font-medium font-Poppins">$10078.00</p>
//                 <p className="text-black text-xl font-medium font-Poppins">$8070.00</p>
//                 <p className="text-black text-xl font-medium font-Poppins">$8070.00</p>
//                 <p className="text-black text-xl font-medium font-Poppins">$10078.00</p>
//                 <p className="text-black text-xl font-medium font-Poppins">$8070.00</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-screen-lg ml-48 mt-8">
//         <p className="ml-96 text-4xl font-semibold font-Poppins">Recent Orders</p>
//         <div className="bg-green-800 p-3 text-white">
//           <div className="flex gap-20 items-center space-x-24">
//             <p className="text-xl text-white">Product ID</p>
//             <p className="text-xl text-white ">Quantity</p>
//             <p className="text-xl text-white">Status</p>
//             <p className="text-xl text-white">Price</p>
//           </div>
//         </div>
//       </div>

//       <div className="rounded-lg p-2 ml-44">
//         {orders.map(order => (
//           <div key={order.id} className="mb-8">
//             <div className="rounded-lg p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
//               <div>
//                 <p className="text-xl text-black ml-4">{order.product}</p>
//               </div>
//               <div>
//                 <p className="text-xl text-black ml-20">{order.quantity}</p>
//               </div>
//               <div>
//                 <p className="text-xl text-black ml-28">{order.status}</p>
//               </div>
//               <div>
//                 <p className="text-xl text-black ml-36">${order.total_price}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;

'use client'

import React, { useState } from "react";
import { FcSalesPerformance } from 'react-icons/fc';
import { RiProductHuntLine } from 'react-icons/ri';
import { AiFillProfile } from 'react-icons/ai';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from 'recharts';
import useGetOrders from "@app/hooks/useGetOrders";

interface OrderData {
  product: string;
  quantity: number;
  total_price: number;
}

const Orders = () => {
  const data = useGetOrders();

  const orders: OrderData[] = data.order;

  const [activeButton, setActiveButton] = useState<'weekly' | 'monthly'>('weekly');

  const chartData = orders.map((order) => ({
    name: order.product,
    TotalOrders: +order.quantity,
    TotalSales: order.total_price,
  }));

  const handleButtonClick = (buttonType: 'weekly' | 'monthly') => {
    setActiveButton(buttonType);
  };

  return (
    <div className="ml-96 flex flex-col items-left font-family-Poppins mb-8 ml-64">
      <p className="ml-48">Eccoconnect</p>
      <p className="ml-48">Look at what is happening with your stores' updates</p>

      <div className="flex space-x-10 mt-10 ml-48">
        <div className="border-4 p-4 max-w-lg rounded-lg text-black-400 bg-sky-500/100 flex items-center">
          <FcSalesPerformance size={62} className="mx-auto" style={{ color: 'white' }} />
          <button
            className={`text-center space-y-2 text-white`}
            onClick={() => handleButtonClick('monthly')}
          >
            <p className="">Total Sales</p>
            <hr className="border-white" />
          </button>
        </div>
        <div className="border-4 p-4 max-w-lg rounded-lg text-Slate-50 bg-blue-950 flex items-center">
          <RiProductHuntLine size={62} className="mx-auto" style={{ color: 'white' }} />
          <button
            className={`text-center space-y-2 text-white`}
            onClick={() => handleButtonClick('monthly')}
          >
            <p className="">Per Product</p>
            <hr className="border-white" />
          </button>
        </div>
        <div className="border-4 p-4 max-w-lg rounded-lg text-Slate-50 bg-blue-950 flex items-center">
          <AiFillProfile size={62} className="mx-auto" style={{ color: 'white' }} />
          <button
            className={`text-center space-y-2 text-white`}
            onClick={() => handleButtonClick('monthly')}
          >
            <p className="">Total product</p>
            <hr className="border-white" />
          </button>
        </div>
      </div>

      <div className="ml-28 mt-10">
        <p className="font-semibold font-Poppins text-3xl ml-64">Total Sales and Order Dynamics</p>
        <div className="flex flex-row mr-8">
          <div className="ml-[50px] font-family-Poppins">
            <div className="bg-white-200 p-4 font-semibold rounded-lg flex flex-2 mt-2 border-1 mr-8">
              <LineChart width={700} height={450} data={chartData}>
                <XAxis dataKey="name">
                  <Label value={activeButton === 'monthly' ? "Time (months)" : "Months"} position="insideBottom" dy={12} />
                </XAxis>
                <YAxis domain={[0, 70000]}>
                  <Label value="Orders / Sales" angle={-90} position="insideLeft" />
                </YAxis>
                <CartesianGrid stroke="#ccc" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="TotalOrders" stroke="#E1AD01" name="Total Orders" />
                <Line type="monotone" dataKey="TotalSales" stroke="#013022" name="Total Sales" />
              </LineChart>
            </div>
          </div>

          <div>
            <p className="text-yellow-500 text-[40px] font-semibold font-Poppins">Elite Customers</p>
            <div className="flex flex-row space-x-16">
              <p className="text-black text-[32px] font-medium font-Poppins">Company</p>
              <p className="text-black text-[32px] font-medium font-Poppins">Sales</p>
            </div>
            <div className="flex flex-row space-x-8">
              <div>
                <p className="text-black text-xl font-normal font-Poppins">Takataka Solutions</p>
                <p className="text-black text-xl font-normal font-Poppins">Pure Planet</p>
                <p className="text-black text-xl font-normal font-Poppins">Pure Planet</p>
                <p className="text-black text-xl font-normal font-Poppins">Takataka Solutions</p>
                <p className="text-black text-xl font-normal font-Poppins">Pure Planet</p>
              </div>
              <div>
                <p className="text-black text-xl font-medium font-Poppins">$10078.00</p>
                <p className="text-black text-xl font-medium font-Poppins">$8070.00</p>
                <p className="text-black text-xl font-medium font-Poppins">$8070.00</p>
                <p className="text-black text-xl font-medium font-Poppins">$10078.00</p>
                <p className="text-black text-xl font-medium font-Poppins">$8070.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg ml-48 mt-8">
        <p className="ml-96 text-4xl font-semibold font-Poppins">Recent Orders</p>
        <div className="bg-green-800 p-3 text-white">
          <div className="flex gap-20 items-center space-x-24">
            <p className="text-xl text-white">Product ID</p>
            <p className="text-xl text-white">Quantity</p>
            <p className="text-xl text-white">Status</p>
            <p className="text-xl text-white">Price</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg p-2 ml-44">
        {orders.map(order => (
          <div key={order.product} className="mb-8">
            <div className="rounded-lg p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <div>
                <p className="text-xl text-black ml-4">{order.product}</p>
              </div>
              <div>
                <p className="text-xl text-black ml-20">{order.quantity}</p>
              </div>
              <div>
                <p className="text-xl text-black ml-28">{order.status}</p>
              </div>
              <div>
                <p className="text-xl text-black ml-36">${order.total_price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
