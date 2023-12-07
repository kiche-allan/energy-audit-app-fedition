// components/Recommendations.js
import React from 'react';
import './recommend.css';

const recommendationsData = [
  'Item 1: Lorem ipsum dolor sit amet.',
  'Item 2: Consectetur adipiscing elit.',
  'Item 3: Sed do eiusmod tempor incididunt.',
  'Item 4: Ut labore et dolore magna aliqua.',
  'Item 5: Enim ad minim veniam.',
  'Item 6: Quis nostrud exercitation ullamco laboris.',
  'Item 7: Nisi ut aliquip ex ea commodo consequat.',
  'Item 8: Duis aute irure dolor in reprehenderit.',
];

const Recommendations = () => {
  return (
    <>
    <div className='recommendations-container'>
      <div className='recommendations-box'>
        <h1 className="text-2xl font-bold mb-4">Energy Efficiency Tips</h1>
        <div className="flex space-x-4">
        Replacing the old light fittings and sockets with new ones and proper fencing around the substation.
        </div>
      </div>
    </div>
    <div className='recommendations-container'>
      <div className='recommendations-box'>
        <h1 className="text-2xl font-bold mb-4">LED Retrofit</h1>
        <div className="flex space-x-4">
        Consider replacing the existing fluorescent tubes with energy-efficient LED (Light Emitting Diode) lighting. LED are also known for their higher energy efficiency and longer lifespan, which can reduce the energy consumption and maintenance costs. 
        </div>
      </div>
    </div>

    <div className='recommendations-container'>
      <div className='recommendations-box'>
        <h1 className="text-2xl font-bold mb-4">Regular Maintenance:</h1>
        <div className="flex space-x-4">
        Develop a routine schedule to replace aging bulbs and fixtures immediately. Ensure the maintenance personnel can easily access lighting fixtures for replacements and repairs. Also implement a maintenance schedule for the HVAC system including filter replacement, cleaning of ducts, and inspection of components.
        </div>
      </div>
    </div>

    <div className='recommendations-container'>
      <div className='recommendations-box'>
        <h1 className="text-2xl font-bold mb-4">Appliance Upgrades</h1>
        <div className="flex space-x-4">
        Consider upgrading older, energy-inefficient appliances to newer, Energy Star-rated models. Energy-efficient appliances consume less electricity while maintaining optimal performance. 
        </div>
      </div>
    </div>

    <div className='recommendations-container'>
      <div className='recommendations-box'>
        <h1 className="text-2xl font-bold mb-4">Socket Optimization</h1>
        <div className="flex space-x-4"> <p>
        Review the placement and necessity of electrical sockets in the kitchen to eliminate redundant outlets and reduce standby power consumption.
        </p>
        </div>
      </div>
    </div>

    
    </>
  );
};

export default Recommendations;
