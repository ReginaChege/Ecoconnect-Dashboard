'use client'
import React, { useState } from "react";
import useGetClient from "@app/hooks/useGetClient";
import { deleteClient } from "@utilities/utils";

interface ClientData {
  id: string;
  username: string;
  email: number;
  date_joined: number;
}

const Client = () => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedClientName, setEditedClientName] = useState("");
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const clients = useGetClient();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSaveClick = (index: number, client: ClientData) => {
    console.log(`Saving changes for client: ${client.username}`);
    setEditIndex(null);
    setEditedClientName("");
  };

  const handleCancelClick = (index: number) => {
    setEditIndex(null);
    setEditedClientName("");
  };

  const handleDeleteClick = (index: number) => {
    setDeleteIndex(index);
  };

  const handleDeleteConfirm = () => {
    setDeleteIndex(null);
    if (deleteIndex !== null) {
      const clientToDelete = clients?.client[deleteIndex];
      if (clientToDelete) {
        console.log(`Deleting client: ${clientToDelete.username}`);
        deleteClient(clientToDelete.id);
      }
    }
  };

  const filteredClients = clients?.client?.filter(
    (client) =>
      client.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="ml-96">

<div className="text-center mt-4 ml-4">
        <input
          type="text"
          placeholder="Search Clients"
          value={searchQuery}
          onChange={handleSearchChange}
          className="py-1 pl-4 rounded-lg border-2 border-black w-3/4 mr-96"
        />
      </div>
      <div className="p-4">
        <div className="grid grid-cols-6 md:grid-cols-6 gap-4">
          <div className="text-lg text-black font-semibold">Company Name</div>
          <div className="text-lg text-black font-semibold">Email</div>
          <div className="text-lg text-black font-semibold ml-24">Signup Date</div>
          <div className="text-lg text-black font-semibold ml-24">Action</div>
        </div>
      </div>
      <div className="rounded-lg p-2">
        {filteredClients?.map((client, index) => (
          <div key={client.id} className="mb-4">
            <div className="rounded-lg p-2 grid grid-cols-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <div className="mb-2 sm:mb-0">
                <p className="text-black">{client.username}</p>
              </div>
              <div>
                <p className="text-black">{client.email}</p>
              </div>
              <div className="mb-2 sm:mb-0 ml-24">
                <p className="text-black">{client.date_joined}</p>
              </div>
              <div className="mt-2 ml-28">
                {editIndex === index ? (
                  <>
                    <button
                      className="bg-green-500 text-black px-2 py-1 rounded-md mr-2"
                      onClick={() => handleSaveClick(index, client)}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-500 text-black px-2 py-1 rounded-md"
                      onClick={() => handleCancelClick(index)}
                    >
                      Cancel
                    </button>
                  </>
                ) : deleteIndex === index ? (
                  <>
                    <button
                      className="bg-red-500 text-black px-2 py-1 rounded-md mr-2"
                      onClick={handleDeleteConfirm}
                    >
                      Confirm Delete
                    </button>
                    <button
                      className="bg-gray-500 text-black px-2 py-1 rounded-md"
                      onClick={() => setDeleteIndex(null)}
                    >
                      Cancel Delete
                    </button>
                  </>
                ) : (
                  <button
                    className="bg-red-500 text-black px-2 py-1 rounded-md"
                    onClick={() => handleDeleteClick(index)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;

