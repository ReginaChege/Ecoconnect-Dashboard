'use client'
import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMessage } from 'react-icons/ai';
import { ImProfile} from 'react-icons/im';
import { RiListOrdered } from 'react-icons/ri';
import {MdProductionQuantityLimits} from 'react-icons/md'
import {FcCustomerSupport} from 'react-icons/fc'


const Sidebar = () => {
const [isOpen, setIsOpen] = useState(true);
const [isOrderHovered, setIsOrderHovered] = useState(false);
const [activePage, setActivePage] = useState('/');


const toggleMenu = () => {
setIsOpen(!isOpen);
};


const handlePageClick = (page: string) => {
setActivePage(page);
};


useEffect(() => {
const handleResize = () => {
if (window.innerWidth < 768) {
setIsOpen(false);
} else {
setIsOpen(true);
}
};


handleResize();
window.addEventListener('resize', handleResize);


return () => {
window.removeEventListener('resize', handleResize);
};
}, []);


return (
<div className={` fixed left-0 top-0 sidebar bg-[#013022] h-screen ${isOpen ? 'w-96' : 'w-16'}`}>
<div className="ml-24 position-[fixed]">
<Image src="/image/Logo.png" alt="Logo" width={80} height={80} />
<div className="menu-toggle md:hidden mb-8 " onClick={toggleMenu}>
<span className='pl-24'><GiHamburgerMenu color="white" size={30} /></span>
</div>
</div>
<nav className="text-white h-xl flex items-center ml-4 md:ml-24">
<ul className={`sidebar-menu ${isOpen ? 'block' : 'hidden'}`}>
<li className={`mb-2 mt-16 ${activePage === '/' ? 'text-green-500 active' : ''}`} style={{ fontSize: '120%' }}>
</li>
<li
className={`mb-2 ${activePage === '/order' ? 'text-green-500 active' : ''}`}
style={{ fontSize: '120%' }}
onMouseEnter={() => setIsOrderHovered(true)}
onMouseLeave={() => setIsOrderHovered(false)}
>
<div className="flex gap mt-16">
<RiListOrdered size={30} color="yellow" />

<a href={'/order'}><span className='text-xl ml-3 mt-1 cursor-pointer' onClick={() => handlePageClick('/order')}>Order</span></a>

</div>
</li>
<li className={`mb-2 ${activePage === '/messages' ? 'text-green-500 active' : ''}`} style={{ fontSize: '120%' }}>
<Link href="/messages" className='flex gap mt-16' onClick={() => handlePageClick('/messages')}>
<AiOutlineMessage size={30} color="yellow" />
<span className='text-xl ml-3 mt-1'>Messages</span>
</Link>
</li>
    <Link href="/products" className='flex gap mt-16' onClick={() => handlePageClick('/products')}>
        <MdProductionQuantityLimits size={30} color="yellow" />
        <span className='text-xl ml-3 mt-1'>Products</span>
    </Link>
    <Link href="/clients" className='flex gap mt-16' onClick={() => handlePageClick('/clients')}>
        <FcCustomerSupport size={30} color="yellow" />
        <span className='text-xl ml-3 mt-1'>Clients</span>
    </Link>
<li className={`mb-2 ${activePage === '/Profile' ? 'text-orange-00 active' : ''}`} style={{ fontSize: '120%' }}>
<Link href="/profile" className='flex gap mt-16' onClick={() => handlePageClick('/Profile')}>
<ImProfile size={30} color="yellow" />
<span className='text-xl ml-3 mt-1'>Profile</span>
</Link>
</li>
</ul>
</nav>
<style jsx>{`
.active {
text-decoration: underline;
}


.active:hover {
text-decoration: underline;
}
`}</style>
</div>
);
};


export default Sidebar;


