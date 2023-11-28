// // 'use client'
// // import React from 'react';

// // const Profile = () => {
// //   return (
// //     <div className="flex flex-col items-center mt-64 ml-4">
// //       <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
// //       <div className="w-full max-w-sm">
// //         <div className="mb-4">
// //           <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
// //             Company:
// //           </label>
// //           <input
// //             type="text"
// //             id="company"
// //             name="company"
// //             placeholder="Enter your company name"
// //             className="w-full p-2 rounded border"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
// //             Password:
// //           </label>
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             placeholder="Enter your password"
// //             className="w-full p-2 rounded border"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <button className="bg-orange-500 hover:bg-green-700 text-black font-bold py-2 px-3 rounded w-1/4 ml-32">
// //             Sign Out
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;

// // // 'use client'

// // // import React from 'react';

// // // const Profile = () => {
// // //   return (
// // //     <div className="flex flex-col items-center mt-44 ml-4">
// // //       <div className="w-64 h-64 border-2 rounded-full relative mb-4">
// // //         <button className="bg-orange-500 text-white font-bold  py-2 px-4 ml-48 rounded absolute bottom-0 right-0">
// // //           Edit
// // //         </button>
// // //       </div>
// // //       <div className="w-full max-w-sm">
// // //         <div className="mb-4">
// // //           <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
// // //             Company:
// // //           </label>
// // //           <input
// // //             type="text"
// // //             id="company"
// // //             name="company"
// // //             placeholder="Enter your company name"
// // //             className="w-full p-2 rounded border"
// // //           />
// // //         </div>
// // //         <div className="mb-4">
// // //           <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
// // //             Password:
// // //           </label>
// // //           <input
// // //             type="password"
// // //             id="password"
// // //             name="password"
// // //             placeholder="Enter your password"
// // //             className="w-full p-2 rounded border"
// // //           />
// // //         </div>
// // //         <div className="mb-4">
// // //           <button className="bg-orange-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-1/8 ml-32">
// // //             Sign Out
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Profile;

// 'use client'
// // import React, { useState } from 'react';

// // const Profile = () => {
// //   const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false);

// //   const handleLogoutClick = () => {
// //     setLogoutDialogOpen(true);
// //   };

// //   const handleLogout = () => {
// //     // Add your logout logic here
// //     console.log('Logging out...');

// //     // Close the logout dialog
// //     setLogoutDialogOpen(false);
// //   };

// //   const handleCancelLogout = () => {
// //     // Close the logout dialog
// //     setLogoutDialogOpen(false);
// //   };

// //   return (
// //     <div className="flex flex-col items-center mt-64 ml-4">
// //       <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
// //       <div className="w-full max-w-sm">
// //         <div className="mb-4">
// //           <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
// //             Company:
// //           </label>
// //           <input
// //             type="text"
// //             id="company"
// //             name="company"
// //             placeholder="Enter your company name"
// //             className="w-full p-2 rounded border"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
// //             Password:
// //           </label>
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             placeholder="Enter your password"
// //             className="w-full p-2 rounded border"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <button
// //             onClick={handleLogoutClick}
// //             className="bg-orange-500 hover:bg-green-700 text-black font-bold py-2 px-3 rounded w-1/4 ml-32"
// //           >
// //             Sign Out
// //           </button>
// //         </div>
// //       </div>

// //       {isLogoutDialogOpen && (
// //         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
// //           <div className="bg-white p-4 rounded-lg text-center">
// //             <p>Are you sure you want to log out?</p>
// //             <div className="mt-4">
// //               <button
// //                 onClick={handleLogout}
// //                 className="bg-red-500 text-white font-bold py-2 px-3 rounded mr-2"
// //               >
// //                 Logout
// //               </button>
// //               <button
// //                 onClick={handleCancelLogout}
// //                 className="bg-gray-400 text-black font-bold py-2 px-3 rounded ml-2"
// //               >
// //                 Cancel
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Profile;

// // import React, { useState } from 'react';

// // const Profile = () => {
// //   const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false);

// //   const handleLogoutClick = () => {
// //     setLogoutDialogOpen(true);
// //   };

// //   const handleLogout = () => {
// //     // Add your logout logic here
// //     console.log('Logging out...');

// //     // Close the logout dialog
// //     setLogoutDialogOpen(false);
// //   };

// //   const handleCancelLogout = () => {
// //     // Close the logout dialog
// //     setLogoutDialogOpen(false);
// //   };

// //   return (
// //     <div className="flex flex-col items-center mt-64 ml-4">
// //       <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
// //       <div className="w-full max-w-sm">
// //         <div className="mb-4">
// //           <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
// //             Company:
// //           </label>
// //           <input
// //             type="text"
// //             id="company"
// //             name="company"
// //             placeholder="Enter your company name"
// //             className="w-full p-2 rounded border"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
// //             Password:
// //           </label>
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             placeholder="Enter your password"
// //             className="w-full p-2 rounded border"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <button
// //             onClick={handleLogoutClick}
// //             className="bg-orange-500 hover:bg-green-700 text-black font-bold py-2 px-3 rounded w-1/4 ml-32"
// //           >
// //             Sign Out
// //           </button>
// //         </div>
// //       </div>

// //       {isLogoutDialogOpen && (
// //         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
// //           <div className="bg-white p-4 rounded-lg text-center w-96 h-64 ml-96">
// //             <p className='mt-16'>Are you sure you want to log out?</p>
// //             <div className="mt-8">
// //               <button
// //                 onClick={handleLogout}
// //                 className="bg-orange-500 text-black font-bold py-2 px-3 rounded mr-2"
// //               >
// //                 Logout
// //               </button>
// //               <button
// //                 onClick={handleCancelLogout}
// //                 className="bg-green-900 text-black font-bold py-2 px-3 rounded ml-2"
// //               >
// //                 Cancel
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Profile;
'use client'

import Link from 'next/link';
// import React, { useState } from 'react';

// const Profile = () => {
//   const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false);

//   const handleLogoutClick = () => {
//     setLogoutDialogOpen(true);
//   };

//   const handleLogout = () => {
//     console.log('Logging out...');

//     setLogoutDialogOpen(false);
//   };

//   const handleCancelLogout = () => {
//     setLogoutDialogOpen(false);
//   };

//   return (
//     <div className="flex flex-col items-center mt-32 ml-4 marker gap-8">
//       <div className="w-96 h-96 bg-gray-300 rounded-full mb-4 border-orange-500">
//         <img src="tak.png" alt="" />
//       </div>
//       <div className="w-full max-w-sm">
//         <div className="mb-4 flex items-center">
//           <label htmlFor="company" className="block  text-sm font-bold mr-2">
//             Company:
//           </label>
//           <input
//             type="text"
//             id="company"
//             name="company"
//             placeholder="Enter your company name"
//             className="w-full p-2 rounded border-green-100 border-2"
//           />
//         </div>
//         <div className="mb-4 flex items-center">
//           <label htmlFor="password" className="block text-sm font-bold mr-2">
//             Password:
//           </label>
//           <input 
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Enter your password"
//             className="w-full p-2 rounded border-green-100 border-2"
//           />
//         </div>
//         <div className="mb-4">
//           <button
//             onClick={handleLogoutClick}
//             className="bg-orange-500 hover:bg-green-700 text-black font-bold py-2 px-3 rounded w-1/4 ml-32"
//           >
//             Sign Out
//           </button>
//         </div>
//       </div>

//       {isLogoutDialogOpen && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-4 rounded-lg text-center w-96 h-64 ml-96">
//             <p className='mt-16'>Are you sure you want to log out?</p>
//             <div className="mt-8">
//               <button
//                 onClick={handleLogout}
//                 className="bg-orange-500 text-black font-bold py-2 px-3 rounded mr-2"
//               >
//                 Logout
//               </button>
//               <button
//                 onClick={handleCancelLogout}
//                 className="bg-green-900 text-black font-bold py-2 px-3 rounded ml-2"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;



// import React, { useState } from 'react';

// const Profile = () => {
//   const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false);

//   const handleLogoutClick = () => {
//     setLogoutDialogOpen(true);
//   };

//   const handleLogout = () => {
//     console.log('Logging out...');

//     setLogoutDialogOpen(false);
//   };

//   const handleCancelLogout = () => {
//     setLogoutDialogOpen(false);
//   };

//   return (
//     <div className="flex flex-col items-center mt-32 ml-4 marker gap-8">
//       <div className="w-96 h-96 bg-gray-300 rounded-full mb-4 border-orange-500">
//       </div>
//       <div className="w-full max-w-sm">
//         <div className="mb-4 flex items-center">
//           <label htmlFor="company" className="block  text-sm font-bold mr-2">
//             Company:
//           </label>
//           <input
//             type="text"
//             id="company"
//             name="company"
//             placeholder="Enter your company name"
//             className="w-full p-2 rounded border-green-100 border-2"
//           />
//         </div>
//         <div className="mb-4 flex items-center">
//           <label htmlFor="password" className="block text-sm font-bold mr-2">
//             Password:
//           </label>
//           <input 
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Enter your password"
//             className="w-full p-2 rounded border-green-100 border-2"
//           />
//         </div>
//         <div className="mb-4">
//           <button
//             onClick={handleLogoutClick}
//             className="bg-orange-500 hover-bg-green-700 text-black font-bold py-2 px-3 rounded w-1/4 ml-32"
//           >
//             Sign Out
//           </button>
//         </div>
//       </div>

//       {isLogoutDialogOpen && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-4 rounded-lg text-center w-96 h-64 ml-96">
//             <p className='mt-16'>Are you sure you want to log out?</p>
//             <div className="mt-8">
//               <button
//                 onClick={handleLogout}
//                 className="bg-orange-500 text-black font-bold py-2 px-3 rounded mr-2"
//               >
//                 Logout
//               </button>
//               <button
//                 onClick={handleCancelLogout}
//                 className="bg-green-900 text-black font-bold py-2 px-3 rounded ml-2"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;



import React, { useState} from 'react';

const Profile = () => {
  const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || 'url_to_default_image');
  
  const handleLogoutClick = () => {
    setLogoutDialogOpen(true);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    setLogoutDialogOpen(false);
  };

  const handleCancelLogout = () => {
    setLogoutDialogOpen(false);
  };

  const handleEditProfileClick = () => {
    setEditProfileOpen(true);
  };

  const handleSaveProfile = () => {
    if (selectedImage) {
      setProfileImage(URL.createObjectURL(selectedImage));
      // Store the profile image URL in local storage.
      localStorage.setItem('profileImage', URL.createObjectURL(selectedImage));
    }
    setEditProfileOpen(false);
  };

  const handleCancelEditProfile = () => {
    setEditProfileOpen(false);
    setSelectedImage(null);
  };

  const handleImageChange = (event:any) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="flex flex-col items-center mt-32 ml-4 marker gap-8">
      <div className="relative w-96 h-96 bg-gray-300 rounded-full mb-4 border-orange-500">
        <img
          src={profileImage}
          alt="Profile"
          className="w-96 h-96 rounded-full"
        />
        <button
          onClick={handleEditProfileClick}
          className="absolute bottom-4 right-4 bg-orange-600 text-white  h-10 w-32 flex justify-center items-center cursor-pointer"
        >
          Edit
        </button>
      </div>
      <div className="w-full max-w-sm">
        <div className="mb-4 flex items-center">
          <label htmlFor="company" className="block text-sm font-bold mr-2">
            Company:
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Enter your company name"
            className="w-full p-2 rounded border-green-100 border-2"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="password" className="block text-sm font-bold mr-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full p-2 rounded border-green-100 border-2"
          />
        </div>
        <div className="mb-4">
          <Link href="/login">
          <button
            onClick={handleLogoutClick}
            className="bg-orange-500 hover-bg-green-700 text-black font-bold py-2 px-3 rounded w-1/4 ml-32"
          >
            Sign Out
          </button>
          </Link>
         
        </div>
      </div>

      {isLogoutDialogOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg text-center w-96 h-64 ml-96">
            <p className="mt-16">Are you sure you want to log out?</p>
            <div className="mt-8">
              <button
                onClick={handleLogout}
                className="bg-orange-500 text-black font-bold py-2 px-3 rounded mr-2"
              >
                Logout
              </button>
              <button
                onClick={handleCancelLogout}
                className="bg-green-900 text-black font-bold py-2 px-3 rounded ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditProfileOpen && (
        <div className="fixed top-0 left-16 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg text-center w-96 h-64 ml-96">
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="mt-16 ml-16"
            />
            <button
              onClick={handleSaveProfile}
              className="bg-green-500 text-white font-bold py-2 px-3 rounded mt-4"
            >
              Save
            </button>
            <button
              onClick={handleCancelEditProfile}
              className="bg-red-500 text-white font-bold py-2 px-3 rounded mt-4 ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
