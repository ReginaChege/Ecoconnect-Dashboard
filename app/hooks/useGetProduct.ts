// // // import { fetch_api, PATHS } from "@utilities/utils";
// // // import { useEffect, useState } from "react";



// // // const useGetProduct = () => {

// // //     const [products, setProducts] = useState();
// // //     const [loading, setLoading] = useState(false)

// // //     useEffect(() => {
// // //         setLoading(true)
// // //         fetch_api(PATHS.GET_PRODUCT)
// // //             .then(res => {
// // //                 console.log('Fetched Products', res);
// // //                 if (res && res.length) setProducts(res);
// // //             })
// // //            .catch((err)=>{
// // //             console.log(err)
// // //            })
// // //     }, []);


// // //     return {orders: products,loading};



// // // }

// // // export default useGetProduct;


// // import { fetch_api, PATHS } from "@utilities/utils";
// // import { useEffect, useState } from "react";

// // const useGetProduct = () => {
// //     const [products, setProducts] = useState(null);
// //     const [loading, setLoading] = useState(false);

// //     useEffect(() => {
// //         setLoading(true);
// //         fetch_api(PATHS.GET_PRODUCT)
// //             .then((res) => {
// //                 console.log('Fetched Products', res);
// //                 if (res && res.length) setProducts(res);
// //             })
// //             .catch((err) => {
// //                 console.log(err);
// //             })
// //         }, []);

// //     return { orders: products, loading };




    
// // };

// // export default useGetProduct;



// import { fetch_api, PATHS } from "@utilities/utils";
// import { useEffect, useState } from "react";

//  const useGetProduct = () => {
//      const [products, setProducts] = useState([]); // Initialize as an empty array
//      const [loading, setLoading] = useState(false);

//      useEffect(() => {
//          setLoading(true);
//          fetch_api(PATHS.GET_PRODUCT)
//              .then((res) => {
//                  if (res && Array.isArray(res)) { 
//                      console.log('Fetched Products', res);
//                      setProducts(res);
//                  } else {
//                      console.log('Invalid API response:', res);
//                  }
//              })
//              .catch((err) => {
//                  console.log('API request error:', err);
//              })
//              .finally(() => {
//                  setLoading(false);
//              });
//      }, []);

//      return { orders: products, loading };
// };

// export default useGetProduct;



// import { fetch_api, PATHS } from "@utilities/utils";
// import { useEffect, useState } from "react";

// const useGetProduct = () => {
//     const [products, setProducts] = useState([]); // Initialize as an empty array
//     const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     fetch_api(PATHS.GET_PRODUCT)
    //         .then((res) => {
    //             if (res && Array.isArray(res)) {
    //                 console.log('Fetched Products', res);
    //                 setProducts(res);
    //             }
    //              else {
    //                 console.log('Invalid API response:', res);
    //             }
    //         })
    //         .catch((err) => {
    //             console.error('API request error:', err);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // }, []);


//     useEffect(() => {
//         setLoading(true);
//         console.log('Fetching data from', PATHS.GET_PRODUCT);
//         fetch_api(PATHS.GET_PRODUCT)
//             .then((res) => {
//                 if (res && Array.isArray(res)) {
//                     console.log('Fetched Products', res);
//                     setProducts(res);
//                 } else {
//                     console.log('Invalid API response:', res);
//                 }
//             })
//             .catch((err) => {
//                 console.error('API request error:', err);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, []);
    

//     return { products, loading };
// };

// export default useGetProduct;



// import { fetch_api, PATHS } from "@utilities/utils";
// import { useEffect, useState } from "react";

// const useGetProduct = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         setLoading(true);
//         fetch_api(PATHS.GET_PRODUCT)
//             .then((res) => {
//                 if (Array.isArray(res)) {
//                     console.log('Fetched Products', res);
//                     setProducts(res);
//                 } else {
//                     console.log('Invalid API response:', res);
//                 }
//             })
//             .catch((err) => {
//                 console.error('API request error:', err);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, []);

//     return { products, loading };
// };

// export default useGetProduct;


// import { fetch_api, PATHS } from "@utilities/utils";
// import { useEffect, useState } from "react";



// export const useGetProduct = () => {

//     const [product, setProducts] = useState(null);
//     const [loading, setLoading] = useState(false)

//     useEffect(() => {
//         setLoading(true)
//         fetch_api(PATHS.GET_PRODUCT)
//             .then(res => {
//                 console.log('Fetched products', res);
//                 if (res && res.length) setProducts(res);
//             })
//            .catch((err)=>{
//             console.log(err)
//            })
//             .finally(()=>{
//                 setLoading(false)
//             })
//     }, []);


//     return {product,loading};



// }


// import { useEffect, useState } from "react";
// import { BASE_URL } from "@/config";

// export const useGetProduct = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setLoading(true);
//         fetch(`${BASE_URL}/api/product/`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`Failed to fetch data: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setProducts(data);
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, []);
    

//     return { products, loading };    
// };

'use client'
import { useEffect, useState } from "react";
import { getProduct } from "@utilities/utils";
interface ProductData {
    id: any;
    name:string,
    description:string,
    price:number,
    quantity:number,
    company_name:string,
    image_url:string,

}
const useGetProducts = ()=>{
  const [product, setProduct] = useState<ProductData[]>([]);
  useEffect(()=>{
    (async()=>{
      const products = await getProduct();
      setProduct(products);
      console.log('products:', products);
    })();
  })
  return {product,}
}
export default useGetProducts;
