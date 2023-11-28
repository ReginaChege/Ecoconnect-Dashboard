'use client'

// components/AddProductForm.js
import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
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
      onAddProduct(product);
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
    <form className="max-w-md mx-auto p-4 bg-white rounded">
      {/* ... (your form inputs) */}
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-green-500 hover:bg-orange-700 text-white p-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default AddProductForm;
