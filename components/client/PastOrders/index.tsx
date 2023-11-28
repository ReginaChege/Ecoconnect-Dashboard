'use client'
import React from 'react';
import { Dropdown } from 'react-bootstrap';

const PastOrders = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen-white-200 -mt-96">
      <div className="w-100 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <input
            type="text"

            placeholder="Search Past Orders"
            
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
        </div>
        <div className="text-lg font-bold mb-4">Past Orders</div>

        <div className="flex items-center mb-4 border">
          <div className="w-30 h-15 bg-green-900 flex items-center justify-center text-white  font-2 mr-4">
            10:20<br/> Order #002 <br/>Last Month Order
          </div>
          <div className="flex-grow">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gray-300 flex items-center justify-center text-white font-2 mr-4">
                Profile
              </div>
              <div>
                <div>Takataka Solutions</div>
                <div>Plastic Waste </div>
                <div>500 tonnes</div>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            Total Order Ksh: 450
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              View Details
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </div>
        <div className="flex items-center mb-4 border">
          <div className="w-30 h-15 bg-green-900 flex items-center justify-center text-white font-2 mr-4">
            10:20<br/> Order #002 <br/>Last Month Order
          </div>
          <div className="flex-grow">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gray-300 flex items-center justify-center text-white  font-2 mr-4">
                Profile
              </div>
              <div>
                <div>Takataka Solutions</div>
                <div>Plastic Waste </div>
                <div>500 tonnes</div>
              </div>
            </div>
          </div>
          <div className="ml-2">
            Total Order Ksh: 450
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              View Details
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </div>
        
        <div className="flex items-center mb-4 border">
          <div className="w-30 h-15 bg-green-900 flex items-center justify-center text-white  font-2 mr-4">
            10:20<br/> Order #002 <br/>Last Month Order
          </div>
          <div className="flex-grow">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gray-300 flex items-center justify-center text-white  font-2 mr-4">
                Profile
              </div>
              <div>
                <div>Takataka Solutions</div>
                <div>Plastic Waste </div>
                <div>500 tonnes</div>
              </div>
            </div>
          </div>
          <div className="ml-2">
            Total Order Ksh: 450
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              View Details
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </div>
        
        <div className="flex items-center mb-4 border">
          <div className="w-30 h-15 bg-green-900 flex items-center justify-center text-white font-2 mr-4">
            10:20<br/> Order #002 <br/>Last Month Order
          </div>
          <div className="flex-grow">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gray-900 flex items-center justify-center text-white font-2 mr-4">
                Profile
              </div>
              <div>
                <div>Takataka Solutions</div>
                <div>Plastic Waste </div>
                <div>500 tonnes</div>
              </div>
            </div>
          </div>
          <div className="ml-2">
            Total Order Ksh: 450
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic background-green">
              View Details
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </div>
        
        <div className="flex items-center mb-4 border">
          <div className="w-30 h-15 bg-green-900 flex items-center justify-center text-white  font-2 mr-4">
            10:20<br/> Order #002 <br/>Last Month Order
          </div>
          <div className="flex-grow">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gray-300 flex items-center justify-center text-white font-2 mr-4">
                Profile
              </div>
              <div>
                <div>Takataka Solutions</div>
                <div>Plastic Waste</div>
                <div> 500 tonnes</div>
              </div>
            </div>
          </div>
          <div className="ml-2">
            Total Order Ksh: 450
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              View Details
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </div>
        
        <div className="flex items-center mb-4 border">
          <div className="w-30 h-15 bg-green-900 flex items-center justify-center text-white font-2 mr-4">
            10:20<br/> Order #002 <br/>Last Month Order
          </div>
          <div className="flex-grow">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gray-300 flex items-center justify-center text-white  font-2 mr-4">
                Profile
              </div>
              <div>
                <div>Takataka Solutions</div>
                <div>Plastic Waste </div>
                <div>500 tonnes</div>
              </div>
            </div>
          </div>
          <div className="ml-2">
            Total Order Ksh: 450
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              View Details
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </div>
        
        <div className="flex items-center mb-4 border">
          <div className="w-30 h-15 bg-green-900 flex items-center justify-center text-white font-2 mr-4">
            10:20<br/> Order #002 <br/>Last Month Order
          </div>
          <div className="flex-grow">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gray-300 flex items-center justify-center text-white  font-2 mr-4">
                Profile
              </div>
              <div>
                <div>Takataka Solutions</div>
                <div>Plastic Waste </div>
                <div>500 tonnes</div>
              </div>
            </div>
          </div>
          <div className="ml-2">
            Total Order Ksh: 450
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              View Details
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </div>
        
        <div className="flex items-center mb-4 border">
          <div className="w-30 h-15 bg-green-900 flex items-center justify-center text-white font-2 mr-4">
            10:20<br/> Order #002 <br/>Last Month Order
          </div>
          <div className="flex-grow">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gray-300 flex items-center justify-center text-white font-2 mr-4">
                Profile
              </div>
              <div>
                <div>Takataka Solutions</div>
                <div>Plastic Waste </div>
                <div>500 tonnes</div>
              </div>
            </div>
          </div>
          <div className="ml-3">
            Total Order Ksh: 450
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              View Details
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </div>
        
        <div className="flex items-center mb-4 border">
          <div className="w-30 h-15 bg-green-900 flex items-center justify-center text-white  font-2 mr-4">
            10:20<br/> Order #002 <br/>Last Month Order
          </div>
          <div className="flex-grow">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gray-300 flex items-center justify-center text-white font-2 mr-4">
                Profile
              </div>
              <div>
                <div>Takataka Solutions</div>
                <div>Plastic Waste </div>
                <div>500 tonnes</div>
              </div>
            </div>
          </div>
          <div className="ml-2">
            Total Order Ksh: 450
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic ">
              View Details
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </div>     

      </div>
    </div>
  );
};

export default PastOrders;

