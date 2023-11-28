// // 'use client'

// // import { useState } from 'react';


// // const AddProduct = ({ onAddProduct }:any) => {
// //   const [product, setProduct] = useState({
// //     quantity: '',
// //     productName: '',
// //     description: '',
// //     imageUrl: '',
// //     price: '',
// //   });

// //   const handleInputChange = (e:any) => {
// //     const { name, value } = e.target;
// //     setProduct({ ...product, [name]: value });
// //   };

// //   const handleSubmit = (e:any) => {
// //     e.preventDefault();
// //     onAddProduct(product);
// //     setProduct({
// //       quantity: '',
// //       productName: '',
// //       description: '',
// //       imageUrl: '',
// //       price: '',
// //     });
// //   };

// //   return (
// //     <form className="max-w-md mx-auto p-4 bg-white rounded">
// //       <h2 className="text-xl font-semibold mb-4">Add Product</h2>
// //       <div className='grid grid-cols-2 gap-4 w-full'>
// //       <div className="mb-4 ">
// //         <label htmlFor="quantity">Quantity</label>
// //         <input
// //           type="number"
// //           id="quantity"
// //           name="quantity"
// //           value={product.quantity}
// //           onChange={handleInputChange}
// //           required
// //           className="w-full border rounded p-2"
// //         />
// //       </div>
// //       <div className="mb-4">
// //         <label htmlFor="productName">Product Name</label>
// //         <input
// //           type="text"
// //           id="productName"
// //           name="productName"
// //           value={product.productName}
// //           onChange={handleInputChange}
// //           required
// //           className="w-full border rounded p-2"
// //         />
// //       </div>
// //       <div className="mb-4">
// //         <label htmlFor="description">Description</label>
// //         <textarea
// //           id="description"
// //           name="description"
// //           value={product.description}
// //           onChange={handleInputChange}
// //           required
// //           className="w-full border rounded p-2"
// //         />
// //       </div>
// //       <div className="mb-4">
// //         <label htmlFor="imageUrl">Image URL</label>
// //         <input
// //           type="text"
// //           id="imageUrl"
// //           name="imageUrl"
// //           value={product.imageUrl}
// //           onChange={handleInputChange}
// //           required
// //           className="w-full border rounded p-2"
// //         />
// //       </div>
// //       <div className="mb-4 ml-82 w-full">
// //         <label htmlFor="price" className='ml-24'>Price</label>
// //         <input
// //           type="number"
// //           step="0.01"
// //           id="price"
// //           name="price"
// //           value={product.price}
// //           onChange={handleInputChange}
// //           required
// //           className="w-full border rounded p-2 ml-24"
// //         />
// //       </div>
// //       </div>

// //       <a href="/Products"> 
// //         <button
// //           type="button"
// //           onClick={handleSubmit}
// //           className="w-1/2 ml-24 bg-green-500 text-white p-2 rounded"
// //         >
// //           Add
// //         </button>
// //       </a>
// //     </form>
// //   );
// // };

// // export default AddProduct;

// 'use client'

// import { useState } from 'react';

// const AddProduct = ({ onAddProduct }) => {
//   const [product, setProduct] = useState({
//     quantity: '',
//     productName: '',
//     description: '',
//     imageUrl: '',
//     price: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddProduct(product);
//     setProduct({
//       quantity: '',
//       productName: '',
//       description: '',
//       imageUrl: '',
//       price: '',
//     });
//   };

//   return (
//     <form className="max-w-md mx-auto p-4 bg-white rounded">
//       <h2 className="text-xl font-semibold mb-4">Add Product</h2>
//       <div className='grid grid-cols-2 gap-4 w-full'>
//         <div className="mb-4 ">
//           <label htmlFor="quantity">Quantity</label>
//           <input
//             type="number"
//             id="quantity"
//             name="quantity"
//             value={product.quantity}
//             onChange={handleInputChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="productName">Product Name</label>
//           <input
//             type="text"
//             id="productName"
//             name="productName"
//             value={product.productName}
//             onChange={handleInputChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={product.description}
//             onChange={handleInputChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="imageUrl">Image URL</label>
//           <input
//             type="text"
//             id="imageUrl"
//             name="imageUrl"
//             value={product.imageUrl}
//             onChange={handleInputChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <div className="mb-4 ml-82 w-full">
//           <label htmlFor="price" className='ml-24'>Price</label>
//           <input
//             type="number"
//             step="0.01"
//             id="price"
//             name="price"
//             value={product.price}
//             onChange={handleInputChange}
//             required
//             className="w-full border rounded p-2 ml-24"
//           />
//         </div>
//       </div>

//       <button
//         type="button"
//         onClick={handleSubmit}
//         className="w-1/2 ml-24 bg-green-500 text-white p-2 rounded"
//       >
//         Add
//       </button>
//     </form>
//   );
// };

// export default AddProduct;

// 'use client'

// import React, { useState } from 'react';

// const AddProduct = ({ onAddProduct }) => {
//   const [product, setProduct] = useState({
//     quantity: '',
//     productName: '',
//     description: '',
//     imageUrl: '',
//     price: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddProduct(product);
//     setProduct({
//       quantity: '',
//       productName: '',
//       description: '',
//       imageUrl: '',
//       price: '',
//     });
//   };

//   return (
//     <form className="max-w-md mx-auto p-4 bg-white rounded">
//       <h2 className="text-xl font-semibold mb-4">Add Product</h2>
//       <div className="flex flex-wrap -mx-2">
//         <div className="w-full md:w-1/2 px-2 mb-4">
//           <label htmlFor="quantity">Quantity</label>
//           <input
//             type="number"
//             id="quantity"
//             name="quantity"
//             value={product.quantity}
//             onChange={handleInputChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <div className="w-full md:w-1/2 px-2 mb-4">
//           <label htmlFor="productName">Product Name</label>
//           <input
//             type="text"
//             id="productName"
//             name="productName"
//             value={product.productName}
//             onChange={handleInputChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <div className="w-full px-2 mb-4">
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={product.description}
//             onChange={handleInputChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <div className="w-full md:w-1/2 px-2 mb-4">
//           <label htmlFor="imageUrl">Image URL</label>
//           <input
//             type="text"
//             id="imageUrl"
//             name="imageUrl"
//             value={product.imageUrl}
//             onChange={handleInputChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <div className="w-full md:w-1/2 px-2 mb-4">
//           <label htmlFor="price">Price</label>
//           <input
//             type="number"
//             step="0.01"
//             id="price"
//             name="price"
//             value={product.price}
//             onChange={handleInputChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//       </div>

//       <button
//         type="button"
//         onClick={handleSubmit}
//         className="w-full bg-green-500 text-white p-2 rounded"
//       >
//         Add
//       </button>
//     </form>
//   );
// };

// export default AddProduct;

'use client'

// import React, { useState } from 'react';

// const AddProduct = ({ onAddProduct }) => {
//   const [product, setProduct] = useState({
//     quantity: '',
//     productName: '',
//     description: '',
//     imageUrl: '',
//     price: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddProduct(product); // Call the callback function to add the product
//     setProduct({
//       quantity: '',
//       productName: '',
//       description: '',
//       imageUrl: '',
//       price: '',
//     });
//   };

//   return (
//     <form className="max-w-md mx-auto p-4 bg-white rounded">
//       <h2 className="text-xl font-semibold mb-4">Add Product</h2>
//       <div className="flex flex-wrap -mx-2">
//         <div className="w-full md:w-1/2 px-2 mb-4">
//           <label htmlFor="quantity">Quantity</label>
//           <input
//             type="number"
//             id="quantity"
//             name="quantity"
//             value={product.quantity}
//             onChange={handleInputChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <div className="w-full md:w-1/2 px-2 mb-4">
//           <label htmlFor="productName">Product Name</label>
//           <input
//             type="text"
//             id="productName"
//             name="productName"
//             value={product.productName}
//             onChange={handleInputChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <div className="w-full px-2 mb-4">
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={product.description}
//             onChange={handleInputChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <div className="w-full md:w-1/2 px-2 mb-4">
//           <label htmlFor="imageUrl">Image URL</label>
//           <input
//             type="text"
//             id="imageUrl"
//             name="imageUrl"
//             value={product.imageUrl}
//             onChange={handleInputChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <div className="w-full md:w-1/2 px-2 mb-4">
//           <label htmlFor="price">Price</label>
//           <input
//             type="number"
//             step="0.01"
//             id="price"
//             name="price"
//             value={product.price}
//             onChange={handleInputChange}
//             required
//             className="w-full border rounded p-2"
//           />
//         </div>
//       </div>

//       <button
//         type="button"
//         onClick={handleSubmit}
//         className="w-full bg-green-500 text-white p-2 rounded"
//       >
//         Add
//       </button>
//     </form>
//   );
// };

// export default AddProduct;


// client/components/AddProduct.js

import React, { useState } from 'react';
import { postProduct } from "@/utilities/utils";

const AddProduct = ({ }) => {
  const [product, setProduct] = useState({
    quantity: '',
    productName: '',
    description: '',
    imageUrl: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await postProduct(product);
      console.log(result)
      setProduct({
        quantity: '',
        productName: '',
        description: '',
        imageUrl: '',
        price: '',
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className='max-w-md mx-auto '> 
 
 
  <form className="max-w-md mx-auto p-4 bg-white rounded">
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
            required
            className="w-full border rounded p-2"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={product.productName}
            onChange={handleInputChange}
            required
            className="w-full border rounded p-2"
          />
        </div>
        <div className="w-full px-2 mb-4">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            required
            className="w-full border rounded p-2"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleInputChange}
            required
            className="w-full border rounded p-2"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            step="0.01"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            required
            className="w-full border rounded p-2"
          />
        </div>
      </div>
 </form> 
       <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-green-500 hover:bg-orange-700 text-white p-2 rounded"
      >
        Add
      </button>
   
 </div>

  );
};

export default AddProduct;
