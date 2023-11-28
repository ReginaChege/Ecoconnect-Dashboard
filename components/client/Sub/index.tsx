import React from 'react';
import SubcategoryPage from '../subcategoryName';

const Subcategory = ({ searchParams }: { searchParams?: { name: string } }) => {
  // Check if searchParams is defined and has a 'name' property
  if (!searchParams || !searchParams.name) {
    // Handle the case where searchParams is undefined or missing the 'name' property
    return (
      <div>
        No valid search parameters provided.
      </div>
    );
  }

  console.log("params data", searchParams.name);
  const setSelectedSubcategory = searchParams.name;

  return (
    <div>
      <SubcategoryPage selectedSubcategory={setSelectedSubcategory} />
    </div>
  );
};

export default Subcategory;
