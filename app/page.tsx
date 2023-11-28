// import React from 'react';
// // import Home from "@app/home/page";
// import { Sidebar } from '@components';

// export default function RootPage() {
//   return (
//     <div>
//       <Sidebar/>
// {/* <Home/> */}
//     </div>
//   );
  
// }

      
'use client'
"use client"
import React, { useEffect, useState } from 'react';
import cookie from 'js-cookie'
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    const isLoggedIn = Boolean(cookie.get('LoginToken'));
    setIsUserLoggedIn(isLoggedIn);
    if (isLoggedIn) {
      router.push('/order');
    } else {
      setTimeout(() => {
        router.push('/order');
      }, 3000);
    }
  }, [router]);
  return (
    <div className="relative h-screen bg-cover bg-center bg-opacity-100" style={{ backgroundImage: "url('https://res.cloudinary.com/dymlezbbg/image/upload/v1698850995/tquyutmuwrv8bgmkdxdv.jpg')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h1 className="text-8xl font-bold mb-4">ECOCONNECT</h1>
    </div>
  </div>
)
};
export default App;
