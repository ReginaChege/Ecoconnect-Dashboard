// // 'use client'
// // import { useEffect, useState } from "react";
// // import { postProduct } from "@utilities/utils";
// // interface ProductData {
// //     id: any;
// //     name:string,
// //     description:string,
// //     price:number,
// //     quantity:number,
// //     company_name:string,
// //     image_url:string,

// // }
// // const usePostProducts = ()=>{
// //   const [product, setProduct] = useState<ProductData[]>([]);
// //   useEffect(()=>{
// //     (async()=>{
// //       const products = await postProduct();
// //       setProduct(products);
// //       console.log('products:', products);
// //     })();
// //   })
// //   return {product,}
// // }
// // export default usePostProducts;




// // 'use client'
// import { useEffect, useState } from "react";
// import { postProduct, fetchProducts } from "@utilities/utils"; // Assuming you have a fetchProducts function

// interface ProductData {
//   id: any;
//   name: string;
//   description: string;
//   price: number;
//   quantity: number;
//   company_name: string;
//   image_url: string;
// }

// const usePostProducts = () => {
//   const [products, setProducts] = useState<ProductData[]>([]);

//   const addProduct = async (newProduct: ProductData) => {
//     try {
//       const addedProduct = await postProduct(newProduct);
//       setProducts((prevProducts) => [...prevProducts, addedProduct]);
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchProductsData = async () => {
//       try {
//         const productsData = await fetchProducts(); // Assuming you have a fetchProducts function
//         setProducts(productsData);
//         console.log('products:', productsData);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProductsData();
//   }, []); 

//   return { products, addProduct };
// };

// export default usePostProducts;

'use client'

import { useEffect, useState } from "react";
import { postProduct, fetchProducts } from "@utilities/utils";

interface ProductData {
  id: any;
  name: string;
  description: string;
  price: number;
  quantity: number;
  company_name: string;
  image_url: string;
}

const usePostProducts = () => {
  const [products, setProducts] = useState<ProductData[]>([]);

  const addProduct = async (newProduct: ProductData) => {
    try {
      const addedProduct = await postProduct(newProduct);
      setProducts((prevProducts) => [...prevProducts, addedProduct]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
        console.log('products:', productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductsData();
  }, []); 

  return { products, addProduct };
};

export default usePostProducts;
