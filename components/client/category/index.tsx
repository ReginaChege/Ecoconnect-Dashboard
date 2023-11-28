'use client'
import React, { useState } from "react";
import Link from "next/link";

const subcategoriesData = {
  recyclable: [
    { name: "Plastics", image: "waterbottle.png" },
    { name: "Papers", image: "papers.jpeg" },
    { name: "Metals", image: "metals.jpg" },
    { name: "Glasses", image: "glasses.jpg" },
    { name: "Batteries", image: "batteries.jpg" },
  ],
  organic: [
    { name: "Food Waste", image: "food.jpeg" },
    { name: "Yard Waste", image: "yard.jpeg" },
    { name: "Animal Waste", image: "animal.jpeg" },
  ],
};

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );

  const handleCategorySelect = (category: string | null) => {
    if (selectedCategory !== category) {
      setSelectedCategory(category);
      setSelectedSubcategory(null);
    }
  };

  const handleSubcategorySelect = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const commonTextStyle = `cursor-pointer mb-20 text-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-yellow-500 hover:text-white`;

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-600 text-[40px]">Categories</h2>
        <p>Please select the type of waste below.</p>
        <div className="flex justify-center space-x-6 mt-6 text-[20px]">
          <div
            className={`category-container  ${
              selectedCategory === "recyclable" ? "selected ml-20" : ""
            }`}
          >
            <h3
              className={`absolute right-[52.9em] text-lg font-semibold ${commonTextStyle}  ${
                selectedCategory === "recyclable" ? "text-yellow-500" : ""
              }`}
              onClick={() => handleCategorySelect("recyclable")}
            >
              Recyclable
            </h3>
            {selectedCategory === "recyclable" && (
              <div className="mt-2">
                <div className="mt-10 space-y-4 flex flex-wrap justify-start">
                  {subcategoriesData.recyclable.map((subcategory) => (
                    <div
                      key={subcategory.name}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "15px",
                      }}
                    >
                      <img
                        src={`/Images/${subcategory.image}`}
                        alt={subcategory.name}
                        className="w-64 h-64 object-cover rounded-lg"
                      />
                      <div className="text-center">
                        <p className="text-lg font-semibold">
                          {subcategory.name}
                        </p>
                        <button
                          className=" border-2 border-yellow-500 text-green-500 px-6 py-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-yellow-500 hover:text-white"
                          style={{ borderRadius: "50px" }}
                          onClick={() => handleSubcategorySelect(subcategory.name)}
                        >
                          <Link
                            href={{
                              pathname: "/Sub",
                              query: { name: subcategory.name },
                            }}
                          >
                            View More
                          </Link>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className={`category-container ${
              selectedCategory === "organic" ? "selected" : ""
            }`}
          >
            <h3
              className={`${commonTextStyle} absolute right-[44em] bottom-15 text-lg font-semibold ${
                selectedCategory === "organic" ? "text-yellow-500" : ""
              }`}
              onClick={() => handleCategorySelect("organic")}
            >
              Organic{" "}
            </h3>
            {selectedCategory === "organic" && (
              <div className="mt-10">
                <div className="mt-5 space-y-4 flex flex-wrap justify-start">
                  {subcategoriesData.organic.map((subcategory) => (
                    <div
                      key={subcategory.name}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "10px",
                      }}
                    >
                      <img
                        src={`/Images/${subcategory.image}`}
                        alt={subcategory.name}
                        className="w-64 h-64 object-cover rounded-lg "
                      />
                      <div className="text-center">
                        <p className="text-lg font-semibold">
                          {subcategory.name}
                        </p>
                        <button
  className="border-2 border-yellow-500 text-green-500 px-6 py-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-yellow-500 hover:text-white"
  style={{ borderRadius: "50px" }}
>
  <Link
    href={{
      pathname: "/Sub",
      query: { category: selectedCategory, name: subcategory.name },
    }}
  >
    View More
  </Link>
</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {selectedSubcategory && (
          <div className="mb-10">
            <h4 className="text-lg font-semibold text-yellow-500">
              Selected Subcategory: {selectedSubcategory}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category; 
