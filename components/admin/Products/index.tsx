'use client'
import React, { useState } from "react";
import Link from "next/link";
import useGetProducts from "@app/hooks/useGetProduct";

interface ProductData {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  company_name: string;
  image_id: number;
}

const Products = () => {
  const products = useGetProducts();
  console.log(products);
  
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="ml-96">
      <h1 className="text-2xl font-semibold text-center mb-4">Product Activity</h1>
      <hr className="border-2 w-full" />
      <div className="flex justify-between items-center mb-4">
        <Link href="/addProduct">
          <button className="bg-green-800 hover:bg-green-500 text-white font-bold py-2 px-3 rounded ml-8 mb-16">
            Add Product
          </button>
        </Link>
      </div>
      <div className="rounded-lg mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 title-row">
          <div className="text-lg text-black font-semibold ml-10">Product</div>
          <div className="text-lg text-black font-semibold ml-3">Company Name</div>
          <div className="text-lg text-black font-semibold ml-4 sm-ml-10">Price</div>
          <div className="text-lg text-black font-semibold">Image</div>
          <div className="text-lg text-black font-semibold ml-10">Quantity</div>
          <div className="text-lg text-black font-semibold mr-1">Description</div>
        </div>
      </div>

      <div className="rounded-lg p-2">
        {products.product.map(product => (
          <div key={product.name} className="mb-4">
            <div className="rounded-lg p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <div className="mb-2 sm:mb-0">
                <div className="flex items-center">
                  <p className="text-lg text-black ml-2">{product.name}</p>
                </div>
              </div>
              <div className="mb-2 sm:mb-0">
                <p className="text-black">{product.company_name}</p>
              </div>
              <div className="mb-2 sm:mb-0">
                <p className="text-black ml-4 sm-ml-8">{product.price}</p>
              </div>
              <div className="mb-2 sm:mb-0">
                <img
                  src={product.image_url}
                  className="object-cover w-96 h-64"
                  alt={product.name}
                />
              </div>
              <div className="mb-2 sm:mb-0">
                <p className="text-black ml-12">{product.quantity}</p>
              </div>
              <div className="mb-2 sm:mb-0">
                <p className="text-black">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
