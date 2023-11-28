'use client'

import React from "react";
import useGetMessage from "@app/hooks/useGetMessage";

const Message = () => {
  const message = useGetMessage();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center mb-4">Message</h1>
      <div className=" bg-green-950 h-24">
      <p className="text-center text-green font-semibold">Overal Message</p>
      </div>
      <div className="ml-8">
        {message.message.map((message, index) => (
          <div key={index} className="mb-4">
            <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
             
              <div className="ml-96 flex">
               <div> <p className="text-black">{message.name}</p></div>
               <div> <p className="text-black  overflow-x-auto w-[1200px] ml-16">{message.body}</p></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;

