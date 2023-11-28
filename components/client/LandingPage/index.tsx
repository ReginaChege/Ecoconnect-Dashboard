'use client'
// import Link from "next/link";
import React from "react";
import "typeface-poppins";
const LandingPage = () => {
  return (
    <div style={{ height: '90vh', display: 'flex', flexDirection: 'column',  }} className="-mb-80">
      <div style={{ flex: 1, filter: 'brightness(80%) contrast(90%) saturate(100%) sepia(0.2)', backgroundSize: 'contain', height: '500px'}}>
        <div className="bg-cover bg-center mt-0 bg-[url(/Images/truck.jpg)]" style={{ fontFamily: 'Poppins, sans-serif', height: '75vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1 className="text-7xl text-white mb-12 fs-4rem">Welcome to EcoConnect</h1>
          <p className="text-white text-4xl text-center fs-32">
            We are committed to making waste collection and recycling <br /> <span className="ml-auto mr-auto">easy and convenient</span>.
          </p>
        </div>
      </div>
      <div style={{ flex: 1 }}>
      </div>
    </div>
  );
};
export default LandingPage;












